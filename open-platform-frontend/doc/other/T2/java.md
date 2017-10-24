JAVA
-----

## 继承，多态
### extends
JAVA的类继承适合pojo类的属性复用。例如通用医嘱具有医嘱名称，医嘱编码等通用属性。子类药品医嘱具有额外的药品规格，价格等属性。子类检查医嘱具有检查项目等属性。
在这种使用场景下，我们可以使用通用医嘱作为父类，药品医嘱和检查医嘱等继承通用医嘱父类。
### implements
接口是JAVA里应对业务变化最强大的工具之一，对于调用者来说，只暴露业务接口，具体的实现可以通过切换实现类灵活扩展，不需要修改原有任何代码。
对于同一个业务流程，可以有不同的实现，例如支付流程都是结算，付款，打印发票的流程。但是用户可以通过现金，支付宝，医保等不同的渠道支付。
或者针对一些未来可能发生发生变化的业务，用接口将可能变化的部分封装，在未来变化发生，或者需要扩展时，也可以在不修改原有代码的情况下，通过添加实现类轻松扩展修改。
（注：在java8里接口可以有默认实现的方法了，基本替代了抽象类的适用场景）

## 重载
JAVA允许定义多个相同名字的方法，只要参数个数或类型不同即可。
针对同一个功能，提供多个重载方法可以方便不同的调用者使用。
比如
```java
int getAgeByBirthday(Date dateOfBirth){...}
int getAgeByBirthday(String dateOfBirth, String format){
    return getAgeByBirthday(new SimpleDateFormat(format).parse(dateOfBirth));
}
int getAgeByBirthday(String dateOfBirthDefaultFormat){
    return getAgeByBirthday(dateOfBirthDefaultFormat, "yyyy-MM-dd");
}
```
这3个方法给不同的调用者都提供了简单的接口。

## 异常处理
异常有2种主要处理方式，一种是不影响业务流程的异常，比如获取用户操作习惯失败，可以指定使用默认设置。这种异常使用try,catch处理即可。
还有一种是需要中断业务流程，提示用户错误信息的异常，这种异常只要在方法定义上将异常通过throw抛出去，最后在controllerAdvice层统一拦截，
将报错信息统一转化成view展示给用户即可。
异常还有3点注意点：
* 即使try中正常return完毕，finally中的语句也会执行。
* java7以后，资源关闭可以使用 try-with-resources 语法。
* spring的事务默认只对RuntimeException回滚。

## 日期
* Date 精确到秒的时间类。不建议使用，一般只有和数据库ORM时会使用。
* Calendar 日历类，不建议使用。
* LocalDate/LocalTime 类。 java8新增，建议大家学习使用。

## jdbc
* 创建连接的代价非常大，不要在程序中自己new connection，要通过连接池获取连接。
* 使用PreparedStatement，即可以避免sql注入，也因为预编译提高性能。
* 设置检索时的批量值，Statement.getFetchSize(); 默认是10，如果结果集比较大，则会进行多次传输。
* 批量修改使用stmt.executeBatch();不要在java中循环执行。

## String
String 是java中最常用的类了，下面介绍几个基本知识点。
* String与byte[]的转换，需要指定编码格式。
* 格式化，例：string s = String.Format("At {0}, the temperature is {1} C.", DateTime.Now, 20.4);
* 与数组的转换，例：String join = String.join(",","hi","you"); String[] split = "hi,you".split(",");
* 正则匹配："aab".matches("a*b");
* 替换："abcbd".replaceAll("b", "e");
* 截取："abcde".substring(0,3);
* 去空格：" abc  ".trim();
* 大小写：toUpperCase() toLowerCase;

## httpClient
httpClient是和外部系统进行http数据交互的主要手段，Spring中可以使用restTemplate来发送http请求获取数据。
例：String result = restTemplate.getForObject("http://example.com/hotels/{hotel}/bookings/{booking}", String.class, "42", "21");
