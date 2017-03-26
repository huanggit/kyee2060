代码开发规范
===

## 命名规范
### 类命名
类的名字必须由大写字母开头，一个单词中的其他字母均为小写。
如果类名称由多个单词组成，则建议将每个单词的首字母均用大写（**驼峰命名**）。例如：
```java
public class IndexController {}
```
由于类是设计用来代表对象的，所以建议在命名类时应尽量选择名词。
### 方法名，参数名
方法的名字的第一个单词应以小写字母开头，并且尽量为动词，后面的单词则建议用大写字母开头（**驼峰命名**）。
参数的命名规范和局部变量的命名规范相同，而且为了避免阅读程序时造成迷惑，请在尽量保证在参数名称为一个单词的情况下，参数的命名尽可能明确。
例如：
```java
public void getPatientInfo(String idNo) {}
```
### 变量名
类属性`static`变量，`static final`常量：全大写，用下划线分割。
局部变量：首字母小写，后边每个单词首字母大写。
例如：
```java
public static final int MAX_ITEMS = 100;
private int currentItems = 10;
```
### 其他命名
* 增删改查的restful及函数命名统一用**add**，**update**，**delete**，**detail**，**list**。

## 格式规范
### 编码和对齐
* 源文件统一使用`utf-8`编码。
*  用空格字符缩进源代码，不要用tab，每个缩进`4`个空格。
* 变量与操作符间要有一个空格。不要有多余的空白区域和多余的括号,空语句。
* 同一行不能有多个声明，不能有多个语句。
* 提交代码前使用IDE的快捷键自动调整代码格式。
* IDE出一个格式化的配置文件，所有项目按配置文件格式化。
### 函数格式
大括号开始不要新开一行，结束需要新开一行，函数间有1到2行间隔。例如：
```java
@RequestMapping("/medicineStatistics/{idNo}")
public ApiResult medicineStatistics(@PathVariable("idNo") String idNo) {
    return ApiResult.success(patientInfoService.medicineStatistics(idNo));
}
@RequestMapping("/examineStatistics/{idNo}")
public ApiResult examineStatistics(@PathVariable("idNo") String idNo) {
    return ApiResult.success(patientInfoService.examineStatistics(idNo));
}
```
### 不要有多余的代码
* JAVA不要出现多余的或者重复的import（提交代码前使用IDE的功能自动智能调整JAVA的import）。
* 任何不被调用的代码和变量，被注释掉的代码，多余的修饰符，都需要被删除。
* JAVA的sysout和JS的console和alert等调试语句必须删除。
### 代码复杂度规范
* 单个文件长度不能超过`1200`行。
* 每行代码宽度不能超过`120`个字符。
* 方法不能超过`30`行，建议小于`20`行。(初始化类属性的特殊方法除外)
* 函数参数不能超过`5`个，建议小于`3`个。
* if，for和try最多嵌套`2`层。
* 一个方法里最多`5`个return。
* 业务上重复的代码段需要写在一个函数里调用，不能复制粘帖。

## 代码可读性及注释规范
### 有意义的命名
命名必须用英文单词全拼表达其业务意义，不得因为长度过长而缩写，不得出现拼音，缩写，和与业务无关的命名，
命名必须和业务功能名副其实，一个项目中一个相同的业务概念不应该有多个不同的词来表达。
如：`theOrderNameOfTheTargetSupplierWhichIsTransfered` 太长，
`transferedTargetSupplierOrderName`则较好，但是`transTgtSplOrdNm`就不好理解了。
### 不允许魔法数
代码中不能出现
```java
if ("1".equals(detail.getDiagnosisType())) { }
else if ("2".equals(detail.getDiagnosisType())) { }
```
而要用
```java
static final String MAIN_DIAGNOSIS = "1";
static final String ASSIST_DIAGNOSIS = "2";
if (MAIN_DIAGNOSIS.equals(detail.getDiagnosisType())) { }
else if (ASSIST_DIAGNOSIS.equals(detail.getDiagnosisType())) { }
```
### 注释规范
* 注释宜少而精，不宜多而滥，更不能误导。
* 命名达意，结构清晰， 类和方法等责任明确，往往不需要，或者只需要很少注释，就可以让人读懂；相反，代码混乱，再多的注释都不能弥补。所以，应当先在代码本身下功夫。
* 不能正确表达代码意义的注释，只会损害代码的可读性。
* 过于详细的注释，对显而易见的代码添加的注释，罗嗦的注释，还不如不写。
* 注释要和代码同步，过多的注释会成为开发的负担。
* 注释不是用来管理代码版本的，如果有代码不要了，直接删除，svn会有记录的，不要注释掉，否则以后没人知道那段注释掉的代码该不该删除。
* 业务上关键复杂的代码必须加注释。

## 最佳实践
### 每次保存的时候，都让你的代码是最美的
程序员都是懒惰的，不要想着等我完成了功能，再来优化代码的格式和结构，等真的把功能完成，很少有人会再愿意回头调整代码。
### 使用log记录错误和关键流程
log可以设定级别，可以控制输出到哪里，容易区分是在代码的什么地方打印的。在关键流程和异常抛出的地方添加log日志，可以方便正式环境上错误的排查。
### 错误判断尽量向前放置（卫语句）
如果某个条件决定程序是否继续，那么对这个条件的判断就要提到最前。例如：
代码中不能出现
```java
List<HospitalRecord> list = inpatientDao.hospitalRecordsByTreatNo(treatNo);
if (!CollectionUtils.isEmpty(list)) {
    HospitalRecord record = list.get(0);
    record.setAge(DateUtil.getAgeByDateOfBirth(record.getDateOfBirth()));
    return record;
} else {
    throw new BusinessException("该就诊记录下无住院记录");
}
```
而要用
```java
List<HospitalRecord> list = inpatientDao.hospitalRecordsByTreatNo(treatNo);
if (CollectionUtils.isEmpty(list)) {
    throw new BusinessException("该就诊记录下无住院记录");
}
HospitalRecord record = list.get(0);
record.setAge(DateUtil.getAgeByDateOfBirth(record.getDateOfBirth()));
return record;
```
### 尽量缩短代码的长度
完成相同功能的代码，在不影响可读性的前提下，尽量使用语言的特性，第三方组件和JAVA8新特性缩短代码的长度，有利于减少犯错可能和提高代码的可读可维护性。例如：
```java
if (order.isPaid() == True) {
    return 1;
}else {
    return 0;
}
```
而要用
```java
return order.isPaid() ? 1 : 0;
```
再例如把一个list的元素用逗号间隔拼接成一个string：
```java
StringBuilder res = new StringBuilder();
for (String elem : list) {
    res.append(elem +”,”);
}
return res.toString().substring(0, res.length() - 2);
```
改成使用第三方util包:
```java
return org.apache.commons.lang3.StringUtils.join(list, ",");
```
或者使用JAVA8的新特性
```java
return list.stream().collect(Collectors.joining(","));
```
### 变量的声明，初始化和被使用尽量放到一起
比方说如下代码：
```java
static final String MAIN_DIAGNOSIS = "1";
List<HospitalRecord> list = inpatientDao.hospitalRecordsByTreatNo(treatNo);
if (CollectionUtils.isEmpty(list)) {
    throw new BusinessException("该就诊记录下无住院记录");
}
HospitalRecord detail = list.get(0);
if (MAIN_DIAGNOSIS.equals(detail.getDiagnosisType())) { }
```
上例中的`MAIN_DIAGNOSIS`变量申明和使用不在一起，这样做不好，不如这样：
```java
List<HospitalRecord> list = inpatientDao.hospitalRecordsByTreatNo(treatNo);
if (CollectionUtils.isEmpty(list))  (CollectionUtils.isEmpty(list)) {
    throw new BusinessException("该就诊记录下无住院记录");
}
HospitalRecord detail = list.get(0);
static final String MAIN_DIAGNOSIS = "1";
if (MAIN_DIAGNOSIS.equals(detail.getDiagnosisType())) { }
```
### 减少代码嵌套层次
代码嵌套层次达2层以上时，一般人理解起来都会困难。下面的代码是一个简单的例子：
```java
public void demo(int a, int b, int c) {
    if (a > b) {
        if (b > c) {
            doJobA();
        } else if (b < c) {
            doJobB()
        }
    } else {
        if (b > c) {
            if (a < c) {
                doJobC();
            }
        }
    }
}
```
改成：
```java
public void demo(int a, int b, int c) {
    if (a > b && b > c) {
        doJobA();
    }
    if (a > b && c > b) {
        doJobB();
    }
    if (a <= b && c < b && a < c) {
        doJobC();
    }
}
```
### 缩小变量的作用域
能用局部变量的，不要使用实例变量，能用实例变量的，不要使用类变量。变量的生存期越短，意味着它被误用的机会越小，
同一时刻程序员要关注的变量的状态越少。实例变量和类变量默认都不是线程安全的，局部变量是线程安全的。比如如下代码：
```java
public class OrderPayAction{
    private Order order;

    public void doAction() {
        order = orderDao.findOrder();
        doJob1();
        doJob2();
    }

    private void doJob1() {
        doSomething(order);
   }

   private void doJob2() {
       doOtherThing(order);
   }
}
```
上例中order只不过担当了在方法间传递参数之用，用下面的方法更好：
```java
public class OrderPayAction{
    public void doAction() {
       order = orderDao.findOrder();
       doJob1(order);
       doJob2(order);
   }

    private void doJob1(Order order) {
       doSomething(order);
   }

    private void doJob2(Order order) {
       doOtherThing(order);
   }
}
```

### 程序职责单一, 尽量用函数名称代替注释
功能单一原则是编程**最重要**的2个原则之一。
关注点分离是软件开发的真理。人类自所以能够完成复杂的工作，就是因为人类能够将工作分解到较小级别的任务上，
在做每个任务时关注更少的东西。让程序单元的职责单一，可以使你在编写这段程序时关注更少的东西，从而降低难度，
减少出错。控制函数的大小是检查程序职责单一的最有效的方法。
同时，单一职责的函数，可以用**有意义的名字代替注释**。
比如说：
```java
void findMaxAndUpdateIt(List list){
   // find max
   int max = 0;
   for(int i : list）{
       //do find max
       max = ...;
   }
   // if max big enough, then update
   if(max > 50) {
       // do update
   }
}
```
改成：（不需要注释，函数名即是注释）
```java
void findMaxAndUpdateIt(List list){
   int max = findMax(list);
   if(isBigEnough(max)){
      update(max);
   }
}

int findMax(List list){
   for(int i : list）{
       //do find max
   }
   return max;
}

void update(int number){
   // do update
}

private static final BIG_ENOUGH_THRESHOLD = 50;
boolean isBigEnough(int number){
   return number > BIG_ENOUGH_THRESHOLD;
}
```

### 开闭原则
开闭原则是编程**最重要**的2个原则之一（另外一个是功能单一原则）。
一个软件实体应当**对扩展开放，对修改关闭**。即软件实体应尽量在不修改原有代码的情况下进行扩展。
比如如下代码：
```java
class GraphicEditor {
  public void drawShape(Shape s) {
   if (s.m_type==1)
     drawRectangle(s);
   else if (s.m_type==2)
     drawCircle(s);
 }
 public void drawCircle(Circle r) {....}
 public void drawRectangle(Rectangle r) {....}
}

class Shape {
 int m_type;
}

class Rectangle extends Shape {
 Rectangle() {
   super.m_type=1;
 }
}

class Circle extends Shape {
 Circle() {
   super.m_type=2;
 }
}
```
用下面的方法更好：
```java
class GraphicEditor {
  public void drawShape(Shape s) {
   s.draw();
 }
}

class Shape {
 abstract void draw();
}

class Rectangle extends Shape {
 public void draw() {
   // draw the rectangle
 }
}
```