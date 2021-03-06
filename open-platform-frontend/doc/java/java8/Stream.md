Stream流
===

java8新特性里，最常用，最有用的当属Stream了，有了Stream，我们对集合的绝大部分操作都可以很方便的实现。 
同时，Stream运用了`pipeline`，`parallelStream`等多种技术提升性能，其执行速度也比自己实现要快很多。
Stream 就如同一个迭代器（`Iterator`），单向，不可往复，数据只能遍历一次，遍历过一次后即用尽了。

***
常用生成Stream的方法：
* **Collection.stream()** − 生成一个串行流
* **Collection.parallelStream()** − 生成一个并行流，在多核环境下可以`并发执行`
* **Random.ints()** − 随机整数流
* **BufferedReader.lines()** − 字符流
* **Stream.of()** − 串行流
```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
numbers.stream();
numbers.parallelStream();
Stream stream = Stream.of("a", "b", "c");
IntStream.of(new int[]{1, 2, 3})
LongStream.rangeClosed(1L, 9L)
Stream.iterate(0, n -> n + 3).limit(10)
```
Stream的方法主要分3种：
* **中间操作** − 一个Stream可以通过pipeline进行多个中间操作
* **终结操作** − 一个Stream在多个中间操作后只能用一个终结操作结束流返回
* **短路操作** − 无限流必须用短路操作转换成一个有限流

***
### 中间操作
* **map** 将所有元素按`Function`进行转换。(mapToInt, flatMap 等)
* **filter** 将所有元素按`Predicate`进行筛选。
* **sorted** 将所有元素排序。
* **distinct** 去掉重复元素。
* **limit/skip** 截取/忽略前n个元素。
* **peek** 执行一个`Consumer`操作。
* **其他** parallel、 sequential、 unordered。
```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
numbers.stream().map( i -> i*i).distinct().forEach(System.out::println);
numbers.stream().filter( i -> i>4).forEach(System.out::println);
numbers.stream().sorted().skip(2).forEach(System.out::println);
```

***
### 终结操作
* **forEach/forEachOrdered** （排序）遍历collection。
* **reduce** 将所有元素按`BiFunction`进行聚合，最后生成单个值。
* **toArray** 返回数组。
* **collect** 接受一个参数`Collector`，根据Collector产生新的集合。
* **min/max** 返回最大/小值。
* **anyMatch/allMatch/noneMatch** 全部/存在/不存在元素符合`Predicate`时，返回true。
* **findFirst/findAny** 返回任意一个元素（findFirst排序集合返回顺序第一个）。
* **其他** count、 iterator。
```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
numbers.stream().forEach(System.out::println);
List<Integer> distinctList = numbers.stream().distinct().collect(Collectors.toList());
Integer sum = numbers.stream().reduce(0, Integer::sum);
```

***
### 短路操作
anyMatch、 allMatch、 noneMatch、 findFirst、 findAny、 limit。
```java
Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
boolean hasEvenNumber = random.ints().limit(10).anyMatch(n -> n%2==0);
Integer randomNumber = random.ints().findFirst();
```

***
###  进一步学习
想系统的学习请参考`官方API`文档：[Stream API](http://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html), 
[Collectors API](http://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html)。下面是2个具体应用实例：  
按照年龄归组:
```java
Map<Integer, List<Person>> personGroups = Stream.generate(new PersonSupplier())
   .limit(100)
   .collect(Collectors.groupingBy(Person::getAge));
```
将食品交易的ID按交易金额排序:
```java
List<Integer> transactionsIds = transactions.parallelStream()
   .filter(t -> t.getType() == Transaction.GROCERY)
   .sorted(comparing(Transaction::getValue).reversed())
   .map(Transaction::getId)
   .collect(toList());
```