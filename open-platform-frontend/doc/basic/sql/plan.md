例1：
   假设LARGE_TABLE是一个较大的表，且username列上没有索引，则运行下面的语句：
SQL> SELECT * FROM LARGE_TABLE where USERNAME = ‘TEST’;
Query Plan
-----------------------------------------
SELECT STATEMENT     Optimizer=CHOOSE (Cost=1234 Card=1 Bytes=14)
  TABLE ACCESS FULL LARGE_TABLE [:Q65001] [ANALYZED]

        在这个例子中，TABLE ACCESS FULL LARGE_TABLE是第一个操作，意思是在LARGE_TABLE表上做全表扫描。当这个操作完成之后，产生的row source中的数据被送往下一步骤进行处理，在此例中，SELECT STATEMENT操作是这个查询语句的最后一步。

                ptimizer=CHOOSE 指明这个查询的optimizer_mode，即optimizer_mode初始化参数指定的值，它并不是指语句执行时真的使用了该优化器。决定该语句使用何种优化器的唯一方法是看后面的cost部分。例如，如果给出的是下面的形式，则表明使用的是CBO优化器，此处的cost表示优化器认为该执行计划的代价:
SELECT STATEMENT     Optimizer=CHOOSE (Cost=1234 Card=1 Bytes=14)

        然而假如执行计划中给出的是类似下面的信息，则表明是使用RBO优化器，因为cost部分的值为空，或者压根就没有cost部分。
SELECT STATEMENT     Optimizer=CHOOSE Cost=
SELECT STATEMENT     Optimizer=CHOOSE
        这样我们从Optimizer后面的信息中可以得出执行该语句时到底用了什么样的优化器。特别的，如果Optimizer=ALL_ROWS| FIRST_ROWS| FIRST_ROWS_n，则使用的是CBO优化器；如果Optimizer=RULE，则使用的是RBO优化器。

        cost属性的值是一个在oracle内部用来比较各个执行计划所耗费的代价的值，从而使优化器可以选择最好的执行计划。不同语句的cost值不具有可比性，只能对同一个语句的不同执行计划的cost值进行比较。

[:Q65001] 表明该部分查询是以并行方式运行的。里面的数据表示这个操作是由并行查询的一个slave进程处理的，以便该操作可以区别于串行执行的操作。

[ANALYZED] 表明操作中引用的对象被分析过了，在数据字典中有该对象的统计信息可以供CBO使用。

例2：
        假定A、B、C都是不是小表，且在A表上一个组合索引：A(a.col1,a.col2) ，注意a.col1列为索引的引导列。
考虑下面的查询：
select  A.col4
from   A , B , C
where  B.col3 = 10   and  A.col1 = B.col1  and  A.col2 = C.col2  and  C.col3 = 5
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=CHOOSE
   1    0   MERGE JOIN
   2    1     SORT (JOIN)
   3    2       NESTED LOOPS
   4    3         TABLE ACCESS (FULL) OF 'B'
   5    3         TABLE ACCESS (BY INDEX ROWID) OF 'A'
   6    5           INDEX (RANGE SCAN) OF 'INX_COL12A' (NON-UNIQUE)
   7    1     SORT (JOIN)
   8    7       TABLE ACCESS (FULL) OF 'C'

Statistics
----------------------------------------------------------
          0  recursive calls
          8  db block gets
          6  consistent gets
          0  physical reads
          0  redo size
        551  bytes sent via SQL*Net to client
        430  bytes received via SQL*Net from client
          2  SQL*Net roundtrips to/from client
          2  sorts (memory)
          0  sorts (disk)
          6  rows processed

        在表做连接时，只能2个表先做连接，然后将连接后的结果作为一个row source，与剩下的表做连接，在上面的例子中，连接顺序为B与A先连接，然后再与C连接：
   B     <---> A <--->    C
col3=10                col3=5

        如果没有执行计划，分析一下，上面的3个表应该拿哪一个作为第一个驱动表？从SQL语句看来，只有B表与C表上有限制条件，所以第一个驱动表应该为这2个表中的一个，到底是哪一个呢？

        B表有谓词B.col3 = 10，这样在对B表做全表扫描的时候就将where子句中的限制条件(B.col3 = 10)用上，从而得到一个较小的row source, 所以B表应该作为第一个驱动表。而且这样的话，如果再与A表做关联，可以有效利用A表的索引(因为A表的col1列为leading column)。

        当然上面的查询中C表上也有谓词(C.col3 = 5)，有人可能认为C表作为第一个驱动表也能获得较好的性能。让我们再来分析一下：如果C表作为第一个驱动表，则能保证驱动表生成很小的row source，但是看看连接条件A.col2 = C.col2，此时就没有机会利用A表的索引，因为A表的col2列不为leading column，这样nested loop的效率很差，从而导致查询的效率很差。所以对于NL连接选择正确的驱动表很重要。

        因此上面查询比较好的连接顺序为(B - - > A) - - > C。如果数据库是基于代价的优化器，它会利用计算出的代价来决定合适的驱动表与合适的连接顺序。一般来说，CBO都会选择正确的连接顺序，如果CBO选择了比较差的连接顺序，我们还可以使用ORACLE提供的hints来让CBO采用正确的连接顺序。如下所示：

select /*+ ordered */ A.col4
from   B,A,C
where  B.col3 = 10
and    A.col1 = B.col1
and    A.col2 = C.col2
and    C.col3 = 5

        既然选择正确的驱动表这么重要，那么让我们来看一下执行计划，到底各个表之间是如何关联的，从而得到执行计划中哪个表应该为驱动表：
        在执行计划中，需要知道哪个操作是先执行的，哪个操作是后执行的，这对于判断哪个表为驱动表有用处。判断之前，如果对表的访问是通过rowid，且该rowid的值是从索引扫描中得来得，则将该索引扫描先从执行计划中暂时去掉。然后在执行计划剩下的部分中，判断执行顺序的指导原则就是：最右、最上的操作先执行。具体解释如下：
得到去除妨碍判断的索引扫描后的执行计划：
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=CHOOSE
   1    0   MERGE JOIN
   2    1     SORT (JOIN)
   3    2       NESTED LOOPS
   4    3         TABLE ACCESS (FULL) OF 'B'
   5    3         TABLE ACCESS (BY INDEX ROWID) OF 'A'
   7    1     SORT (JOIN)
   8    7       TABLE ACCESS (FULL) OF 'C'
        看执行计划的第3列，即字母部分，每列值的左面有空格作为缩进字符。在该列值左边的空格越多，说明该列值的缩进越多，该列值也越靠右。如上面的执行计划所示：第一列值为6的行的缩进最多，即该行最靠右；第一列值为4、5的行的缩进一样，其靠右的程度也一样，但是第一列值为4的行比第一列值为5的行靠上；谈论上下关系时，只对连续的、缩进一致的行有效。

        从这个图中我们可以看到，对于NESTED LOOPS部分，最右、最上的操作是TABLE ACCESS (FULL) OF 'B'，所以这一操作先执行，所以该操作对应的B表为第一个驱动表(外部表)，自然，A表就为内部表了。从图中还可以看出，B与A表做嵌套循环后生成了新的row source ，对该row source进行来排序后，与C表对应的排序了的row source(应用了C.col3 = 5限制条件)进行MSJ连接操作。所以从上面可以得出如下事实：B表先与A表做嵌套循环，然后将生成的row source与C表做排序—合并连接。

        通过分析上面的执行计划，我们不能说C表一定在B、A表之后才被读取，事实上，B表有可能与C表同时被读入内存，因为将表中的数据读入内存的操作可能为并行的。事实上许多操作可能为交叉进行的，因为ORACLE读取数据时，如果就是需要一行数据也是将该行所在的整个数据块读入内存，而且还有可能为多块读。
        看执行计划时，我们的关键不是看哪个操作先执行，哪个操作后执行，而是关键看表之间连接的顺序(如得知哪个为驱动表，这需要从操作的顺序进行判断)、使用了何种类型的关联及具体的存取路径(如判断是否利用了索引)

        在从执行计划中判断出哪个表为驱动表后，根据我们的知识判断该表作为驱动表(就像上面判断ABC表那样)是否合适，如果不合适，对SQL语句进行更改，使优化器可以选择正确的驱动表。

对于RBO优化器：
        在ORACLE文档上说：对于RBO来说，以from 子句中从右到左的顺序选择驱动表，即最右边的表为第一个驱动表，这是其英文原文：All things being equal RBO chooses the driving order by taking the tables in the FROM clause RIGHT to LEFT。不过，在我做的测试中，从来也没有验证过这种说法是正确的。我认为，即使在RBO中，也是有一套规则来决定使用哪种连接类型和哪个表作为驱动表，在选择时肯定会考虑当前索引的情况，还可能会考虑where 中的限制条件，但是肯定是与where中限制条件的位置无关。

测试：
如果我创建3个表：
create table A(col1 number(4,0),col2 number(4,0), col4 char(30));
create table B(col1 number(4,0),col3 number(4,0), name_b char(30));
create table C(col2 number(4,0),col3 number(4,0), name_c char(30));
create index inx_col12A on a(col1,col2);
执行查询：
select A.col4
from   B, A, C
where  B.col3 = 10
and    A.col1 = B.col1
and    A.col2 = C.col2
and    C.col3 = 5;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=RULE
   1    0   MERGE JOIN
   2    1     SORT (JOIN)
   3    2       NESTED LOOPS
   4    3         TABLE ACCESS (FULL) OF 'B'
   5    3         TABLE ACCESS (BY INDEX ROWID) OF 'A'
   6    5           INDEX (RANGE SCAN) OF 'INX_COL12A' (NON-UNIQUE)
   7    1     SORT (JOIN)
   8    7       TABLE ACCESS (FULL) OF 'C'

select A.col4
from   B, A, C
where  A.col1 = B.col1
and    A.col2 = C.col2;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=RULE
   1    0   MERGE JOIN
   2    1     SORT (JOIN)
   3    2       NESTED LOOPS
   4    3         TABLE ACCESS (FULL) OF 'B'
   5    3         TABLE ACCESS (BY INDEX ROWID) OF 'A'
   6    5           INDEX (RANGE SCAN) OF 'INX_COL12A' (NON-UNIQUE)
   7    1     SORT (JOIN)
   8    7       TABLE ACCESS (FULL) OF 'C'

将A表上的索引inx_col12A删除后：
select A.col4
from   B, A, C
where  A.col1 = B.col1
and    A.col2 = C.col2;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=RULE
   1    0   MERGE JOIN
   2    1     SORT (JOIN)
   3    2       MERGE JOIN
   4    3         SORT (JOIN)
   5    4           TABLE ACCESS (FULL) OF 'C'
   6    3         SORT (JOIN)
   7    6           TABLE ACCESS (FULL) OF 'A'
   8    1     SORT (JOIN)
   9    8       TABLE ACCESS (FULL) OF 'B'

        通过上面的这些例子，使我对oracle文档上的” All things being equal RBO chooses the driving order by taking the tables in the FROM clause RIGHT to LEFT”这句话持怀疑态度。此时，我也不能使用hints来强制优化器使用nested loop，如果使用了hints，这样就自动使用CBO优化器，而不是RBO优化器了。

对于CBO优化器：
        CBO根据统计信息选择驱动表，假如没有统计信息，则在from 子句中从左到右的顺序选择驱动表。这与RBO选择的顺序正好相反。这是英文原文(CBO determines join order from costs derived from gathered statistics. If there are no stats then CBO chooses the driving order of tables from LEFT to RIGHT in the FROM clause.  This is OPPOSITE to the RBO) 。我还是没法证实这句话的正确性。不过经过验证：“如果用ordered 提示(此时肯定用CBO)，则以from 子句中按从左到右的顺序选择驱动表”这句话是正确的。实际上在CBO中，如果有统计数据(即对表与索引进行了分析)，则优化器会自动根据cost值决定采用哪种连接类型，并选择合适的驱动表，这与where子句中各个限制条件的位置没有任何关系。如果我们要改变优化器选择的连接类型或驱动表，则就需要使用hints了，具体hints的用法在后面会给予介绍。

测试：
如果我创建的3个表：
create table A(col1 number(4,0),col2 number(4,0), col4 char(30));
create table B(col1 number(4,0),col3 number(4,0), name_b char(30));
create table C(col2 number(4,0),col3 number(4,0), name_c char(30));
create index inx_col12A on a(col1,col2);

执行查询：
select A.col4
from   B, A, C
where  B.col3 = 10
and    A.col1 = B.col1
and    A.col2 = C.col2
and    C.col3 = 5;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=ALL_ROWS (Cost=3 Card=1 Bytes=110)
   1    0   NESTED LOOPS (Cost=3 Card=1 Bytes=110)
   2    1     MERGE JOIN (CARTESIAN) (Cost=2 Card=1 Bytes=52)
   3    2       TABLE ACCESS (FULL) OF 'B' (Cost=1 Card=1 Bytes=26)
   4    2       SORT (JOIN) (Cost=1 Card=1 Bytes=26)
   5    4         TABLE ACCESS (FULL) OF 'C' (Cost=1 Card=1 Bytes=26)
   6    1     TABLE ACCESS (FULL) OF 'A' (Cost=1 Card=82 Bytes=4756)

select A.col4
from   B, A, C
where  A.col1 = B.col1
and    A.col2 = C.col2;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=ALL_ROWS (Cost=5 Card=55 Bytes=4620)
   1    0   HASH JOIN (Cost=5 Card=55 Bytes=4620)
   2    1     HASH JOIN (Cost=3 Card=67 Bytes=4757)
   3    2       TABLE ACCESS (FULL) OF 'B' (Cost=1 Card=82 Bytes=1066)
   4    2       TABLE ACCESS (FULL) OF 'A' (Cost=1 Card=82 Bytes=4756)
   5    1     TABLE ACCESS (FULL) OF 'C' (Cost=1 Card=82 Bytes=1066)

将A表上的索引inx_col12A删除后：
select A.col4
from   B, A, C
where  A.col1 = B.col1
and    A.col2 = C.col2;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=ALL_ROWS (Cost=5 Card=55 Bytes=4620)
   1    0   HASH JOIN (Cost=5 Card=55 Bytes=4620)
   2    1     HASH JOIN (Cost=3 Card=67 Bytes=4757)
   3    2       TABLE ACCESS (FULL) OF 'B' (Cost=1 Card=82 Bytes=1066)
   4    2       TABLE ACCESS (FULL) OF 'A' (Cost=1 Card=82 Bytes=4756)
   5    1     TABLE ACCESS (FULL) OF 'C' (Cost=1 Card=82 Bytes=1066)

select /*+ ORDERED */A.col4
from   C, A, B
where  B.col3 = 10
and    A.col1 = B.col1
and    A.col2 = C.col2
and    C.col3 = 5;
Execution Plan
----------------------------------------------------------
   0      SELECT STATEMENT ptimizer=ALL_ROWS (Cost=3 Card=1 Bytes=110)
   1    0   NESTED LOOPS (Cost=3 Card=1 Bytes=110)
   2    1     NESTED LOOPS (Cost=2 Card=1 Bytes=84)
   3    2       TABLE ACCESS (FULL) OF 'C' (Cost=1 Card=1 Bytes=26)
   4    2       TABLE ACCESS (FULL) OF 'A' (Cost=1 Card=82 Bytes=4756)
   5    1     TABLE ACCESS (FULL) OF 'B' (Cost=1 Card=1 Bytes=26)
        这个查询验证了通过ORDERED提示可以正确的提示优化器选择哪个表作为优化器。