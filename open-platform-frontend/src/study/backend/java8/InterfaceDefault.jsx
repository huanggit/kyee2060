import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class InterfaceDefault extends Component {
    render() {
        return (
            <RightMarkDown source={['### 接口默认方法(default method)',
                '***',
                'java8为接口提供了默认方法，使得interface的方法定义在java8里也可以和abstract class一样可以有默认实现。同时默认方法也可以是static的。',
                '```java',
                'public interface Vehicle {',
                '\t default void print(){',
                '\t\t System.out.println("I am a vehicle!");',
                '\t }',
                '\t static void blowHorn(){',
                '\t\t System.out.println("horn!!!");',
                '\t }',
                '}',
                'public interface FourWheeler {',
                '\t default void print(){',
                '\t\t System.out.println("I am a FourWheeler!");',
                '\t }',
                '}',
                '```',
                '需要注意的是，如果一个class同时实现2个具有相同相同方法，但是默认实现不同的interface。需要自己重写这个方法。',
                '```java',
                'class Car implements Vehicle, FourWheeler {',
                '\t public void print(){',
                '\t\t Vehicle.super.print();',
                '\t\t FourWheeler.super.print();',
                '\t\t System.out.println("I am a Car!");',
                '\t }',
                '}',
                '```',
                '所以自java8以后，推荐大家多使用interface而不是abstract class来做抽象类，因为interface可以多继承。',
            ]}/>
        )
    }
}
