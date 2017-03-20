接口默认方法(default method)
===

java8为接口提供了默认方法，关键词`default`，使得interface的方法定义在java8里也可以和abstract class一样可以有默认实现。同时默认方法也可以是`static`的。
```java
// 车辆接口，有默认的print方法
public interface Vehicle {
\t default void print(){
\t\t System.out.println("I am a vehicle!");
\t }
\t static void blowHorn(){
\t\t System.out.println("horn!!!");
\t }
}
// 四轮车接口，也有默认的print方法
public interface FourWheeler {
\t default void print(){
\t\t System.out.println("I am a FourWheeler!");
\t }
}
```
需要注意的是，如果一个class同时实现2个具有相同相同方法，但是默认实现不同的interface。需要自己重写这个方法。
```java
// 小汽车同时实现了车辆和四轮车接口，必须重写默认的print方法
class Car implements Vehicle, FourWheeler {
\t public void print(){
\t\t Vehicle.super.print();
\t\t FourWheeler.super.print();
\t\t Vehicle.blowHorn();
\t\t System.out.println("I am a Car!");
\t }
}
```
所以自java8以后，推荐大家多使用interface而不是abstract class来做抽象类，因为interface可以多继承。