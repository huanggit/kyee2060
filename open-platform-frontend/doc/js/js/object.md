对象&数组
===

## 对象
js对象可以看成一个无序集合，或者是我们都比较熟悉的散列表（hashtable），字典（dictionary）。
除此之外，还可以js对象还可以从一个称为原型的对象继承属性，这种原型继承（prototypal inheritance）是js的核心特征。

js对象主要分为3种：
* **内置对象（native object）**：js规范自带，如 `Array`，`Function`，`Date`，`RegExp`等。
* **主机对象（host object）**：客户端js自带，如浏览器自带的`window`。
* **自定义对象（user-defined object）**：用户自定义。

### 继承
js通过原型对象链（prototype）来实现属性继承。也可以直接用Object.create()方法来实现。
```js
var parent = {x:1};
// 使用Object.create，需要E5
var child1 = Object.create(parent);
// 使用prototype
function f(){}
f.prototype = parent
var child2 = new f();
```
也可以通过原型来模拟类继承，这里不展开介绍。

### 成员函数，类函数，原型函数
3种函数的使用场景不同：
* 成员函数 类实例调用，可以访问实例的成员变量。
* 类函数 类对象调用，实例不能调用，不能访问实例的成员变量。
* 原型函数 类似于成员函数，主要给一些已有类（Date,Array等）添加新的函数，或实现类继承。

### 序列化
* JSON.stringify() 序列化js对象为json字符串。
* JSON.parse() 将被序列化的json字符串还原成js对象。

## 数组
数组是有序结合，本质上是一个继承了Array.prototype的属性的js对象。
带有length属性，能根据非负整数属性排序，并且定义了一套丰富的数组操作方法。

### 数组仍是对象
```js
var a = [1,'x',{y:1}];
a['noneNumberProperty'] = 2;
a[4] = 3;
console.log(a);
// [ 1, 'x', { y: 1 }, , 3, noneNumberProperty: 2 ]
console.log(a.length);
// 5
```
可以看到数组的属性和对象的属性没有区别，唯一的区别就是数组对非负整数的属性进行了排序和length计算。

### length
```js
var a = [1,2,3];
a.length = 1;
console.log(a);
// [1]
```
对数组长度的赋值会截断数组内容，需要注意。

### 数组的主要方法
* 常用：join()，reverse()，sort()，concat()，slice()。
* 栈：push()，pop()。shift()和unshift()。
* E5新方法：forEach()，map()，filter()，every()和some()，reduce()和()reduceRight()，indexOf()和lastIndexOf()。


