日期时间类
===

老的java日期时间类Date和Calendar都存在以下问题：
* 非线程安全
* API使用不简洁方便
* 时区处理复杂

***
### 本地日期时间API
新的java8的日期时间类在`java.time`包下，主要有LocalDate/LocalTime和LocalDateTime。
```java
import java.time.*;
public class Java8Tester {
\t public static void main(String args[]){
\t\t LocalDateTime currentTime = LocalDateTime.now();
\t\t LocalDate date1 = currentTime.toLocalDate();
\t\t Month month = currentTime.getMonth();
\t\t int day = currentTime.getDayOfMonth();
\t\t int seconds = currentTime.getSecond();
\t\t LocalDateTime date2 = currentTime.withDayOfMonth(10).withYear(2012);
\t\t LocalDate date3 = LocalDate.of(2014, Month.DECEMBER, 12);
\t\t LocalTime date5 = LocalTime.parse("20:15:30");
\t }
}
```

***
### 计时单位枚举
java8增加了新包`java.time.temporal.ChronoUnit`，来枚举计时单位，取代了老API的魔法整数。
```java
import java.time.*;
public class Java8Tester {
\t public static void main(String args[]){
\t\t LocalDate today = LocalDate.now();
\t\t LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
\t\t LocalDate nextMonth = today.plus(1, ChronoUnit.MONTHS);
\t\t LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
\t\t LocalDate nextDecade = today.plus(1, ChronoUnit.DECADES);
\t }
}
```

***
### 时间段计算
新的java8引入了`Period`来计算Date的时间段，引入`Duration`来计算Time的时间段。
```java
import java.time.*;
public class Java8Tester {
\t public static void main(String args[]){
\t\t LocalDate date1 = LocalDate.now();
\t\t LocalDate date2 = date1.plus(1, ChronoUnit.MONTHS);
\t\t Period period = Period.between(date2, date1);
\t\t ;
\t\t LocalTime time1 = LocalTime.now();
\t\t Duration twoHours = Duration.ofHours(2);
\t\t LocalTime time2 = time1.plus(twoHours);
\t\t Duration duration = Duration.between(time1, time2);
\t }
}
```

***
### 时间调节器
新的java8引入`TemporalAdjuster`来处理复杂的日期时间的计算。
```java
import java.time.*;
public class Java8Tester {
\t public static void main(String args[]){
\t\t LocalDate date1 = LocalDate.now();
\t\t //获取下周周二
\t\t LocalDate nextTuesday = date1.with(TemporalAdjusters.next(DayOfWeek.TUESDAY));
\t\t //下个月的第二个周六
\t\t LocalDate secondSaturday = firstInYear
\t\t\t .with(TemporalAdjusters.nextOrSame(DayOfWeek.SATURDAY))
\t\t\t .with(TemporalAdjusters.next(DayOfWeek.SATURDAY));
\t }
}
```

***
### 老时间类转新时间类
java8里，老的Date类和Calendar类新增了`toInstant()`方法，该方法可以把老的时间类转换成新的时间类。
```java
import java.time.*;
public class Java8Tester {
\t public static void main(String args[]){
\t\t Date currentDate = new Date();
\t\t Instant now = currentDate.toInstant();
\t\t ZoneId currentZone = ZoneId.systemDefault();
\t\t LocalDateTime localDateTime = LocalDateTime.ofInstant(now, currentZone);
\t }
}
```