import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class Stream extends Component {
    render() {
        return (
            <RightMarkDown source={['### Stream流',
                '***',
                '#### ',
                'Lambda表达式（匿名函数）是java8里最核心的新特性，是函数式编程的重要的工具之一，能大大简化代码开发。\n',
                'Lambda表达式作为匿名函数，在java8里，函数的类型是只有单个函数定义的接口。\n',
                '下面是Lambda表达式的语法：',
                '```java',
                'interface MathOperation {',
                '\t int operation(int a, int b);',
                '}',
                'MathOperation multiplication = (int a, int b) -> { return a * b; };',
                '```',
                'Lambda表达式在某些情况下可以简化写法：',
                '```java',
                '// 如果函数只有一个语句，可以省略括号，同时也可以省略return。',
                'MathOperation addition = (int a, int b) -> a + b;',
                '\t',
                '// 如果类型可以推导出来，可以省略类型',
                'MathOperation subtraction = (a, b) -> a - b;',
                '\t',
                '// 如果参数只有一个，可以省略括号',
                'a -> a * a',
                '```',

                'java8里，函数可以作为参数传人其他函数：',
                '```java',
                'int operate(int a, int b, MathOperation mathOperation){',
                '\t return mathOperation.operation(a, b);',
                '}',
                'System.out.println("10 + 5 = " + tester.operate(10, 5, addition));',
                'System.out.println("10 x 5 = " + tester.operate(10, 5, multiplication));',
                'System.out.println("10 - 5 = " + tester.operate(10, 5, (a, b) -> a - b));',
                '```',

                '***',
                '#### 函数引用',
                'java8里有3种方法可以使用函数引用：',
                '* static方法（类名::方法名）',
                '* 类实例的方法（实例名::方法名）',
                '* 构造方法（类名::new）',
                '```java',
                'List names = new ArrayList();',
                'names.add("soul developer");',
                'names.forEach(System.out::println);',
                '```',
            ]}/>
        );
    }
}
