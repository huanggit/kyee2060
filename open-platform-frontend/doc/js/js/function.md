函数
===
在js里，函数和数组一样，只是一个特别的对象。

## 调用
* 作为函数
* 作为方法(隐性实参this)
* 作为构造函数(this代表new的对象)
* 用call或apply

## 参数
* 当传入参数少于定义参数，少的都是undefined。
* 当传入参数多于定义参数，多的可以通过arguments[]数组来获取。

## 函数自定义属性
函数作为一个特殊的对象，可以自定义属性，这个属性可以作为类似于静态变量的作用服务于所有的调用。
当构造函数自定义属性时，可以作为所有实例共用的static变量。

## 函数可以作为命名空间
js不提供代码块的功能，如果某块逻辑执行完毕后，不想让其中的局部变量成为全局变量，可以用函数包裹：
```js
(function(){
  //一个函数空间，定义并立刻调用它
})();
```

## 闭包
由于js实现的作用域链机制，导致了闭包的出现。
闭包就是函数嵌套定义，并且内部函数调用外部函数的局部变量，最后返回内部函数，以供以后调用。
```js
var scope = 'global';
function outer(){
  var scope = 'local';
  return function(){return scope;}
}
console.log(outer()());
// local
```
## Function对象的属性
* prototype： 当函数作为构造函数时，实例可以继承原型对象的属性。
* call和apply： 函数f可以对某个对象o操作，函数内部用this代表对象，f.call(o)。

## 函数作为参数
```js
function not(f){
  return function(){
    return !f.apply(this, arguments);
  }
}
```
