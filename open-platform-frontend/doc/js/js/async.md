你可能知道，Javascript语言的执行环境是"单线程"（single thread）。

所谓"单线程"，就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。

这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。
常见的浏览器无响应（假死），往往就是因为某一段Javascript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。

为了解决这个问题，Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）。

"同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，
后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

"异步模式"非常重要。在浏览器端，耗时很长的操作都应该异步执行，避免浏览器失去响应，最好的例子就是Ajax操作。
在服务器端，"异步模式"甚至是唯一的模式，因为执行环境是单线程的，如果允许同步执行所有http请求，服务器性能会急剧下降，很快就会失去响应。

本文总结了"异步模式"编程的4种方法，理解它们可以让你写出结构更合理、性能更出色、维护更方便的Javascript程序。

一、回调函数

这是异步编程最基本的方法。

假定有两个函数f1和f2，后者等待前者的执行结果。

    　　f1();

    　　f2();

如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。

    　　function f1(callback){

    　　　　setTimeout(function () {

    　　　　　　// f1的任务代码

    　　　　　　callback();

    　　　　}, 1000);

    　　}

执行代码就变成下面这样：

    　　f1(f2);

采用这种方式，我们把同步操作变成了异步操作，f1不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。

回调函数的优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。

二、事件监听

另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

还是以f1和f2为例。首先，为f1绑定一个事件（这里采用的jQuery的写法）。

    　　f1.on('done', f2);

上面这行代码的意思是，当f1发生done事件，就执行f2。然后，对f1进行改写：

    　　function f1(){

    　　　　setTimeout(function () {

    　　　　　　// f1的任务代码

    　　　　　　f1.trigger('done');

    　　　　}, 1000);

    　　}

f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。

这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。

三、发布/订阅

上一节的"事件"，完全可以理解成"信号"。

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。
这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

这个模式有多种实现，下面采用的是Ben Alman的Tiny Pub/Sub，这是jQuery的一个插件。

首先，f2向"信号中心"jQuery订阅"done"信号。

    　　jQuery.subscribe("done", f2);

然后，f1进行如下改写：

    　　function f1(){

    　　　　setTimeout(function () {

    　　　　　　// f1的任务代码

    　　　　　　jQuery.publish("done");

    　　　　}, 1000);

    　　}

jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。

此外，f2完成执行后，也可以取消订阅（unsubscribe）。

    　　jQuery.unsubscribe("done", f2);

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

四、Promises对象

Promises对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。

简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：

    　　f1().then(f2);

f1要进行如下改写（这里使用的是jQuery的实现）：

    　　function f1(){

    　　　　var dfd = $.Deferred();

    　　　　setTimeout(function () {

    　　　　　　// f1的任务代码

    　　　　　　dfd.resolve();

    　　　　}, 500);

    　　　　return dfd.promise;

    　　}

这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。

比如，指定多个回调函数：

    　　f1().then(f2).then(f3);

再比如，指定发生错误时的回调函数：

    　　f1().then(f2).fail(f3);

而且，它还有一个前面三种方法都没有的好处：如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。

五、参考链接

　　* Asynchronous JS: Callbacks, Listeners, Control Flow Libs and Promises
    sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/




-------
首先看下面的代码：

function foo() {
    console.log( 'first' );
    setTimeout( ( function(){ console.log( 'second' ); } ), 5);

}

for (var i = 0; i < 1000000; i++) {
    foo();
}

执行结果会首先全部输出first，然后全部输出second；尽管中间的执行会超过5ms。为什么？
Javascript是单线程的

因为JS运行在浏览器中，是单线程的，每个window一个JS线程，既然是单线程的，在某个特定的时刻只有特定的代码能够被执行，并阻塞其它的代码。
而浏览器是事件驱动的（Event driven），浏览器中很多行为是异步（Asynchronized）的，会创建事件并放入执行队列中。
javascript引擎是单线程处理它的任务队列，你可以理解成就是普通函数和回调函数构成的队列。
当异步事件发生时，如mouse click, a timer firing, or an XMLHttpRequest completing（鼠标点击事件发生、定时器触发事件发生、XMLHttpRequest完成回调触发等），
将他们放入执行队列，等待当前代码执行完成。
异步事件驱动

前面已经提到浏览器是事件驱动的（Event driven），浏览器中很多行为是异步（Asynchronized）的，例如：鼠标点击事件、窗口大小拖拉事件、定时器触发事件、XMLHttpRequest完成回调等。
当一个异步事件发生的时候，它就进入事件队列。浏览器有一个内部大消息循环，Event Loop（事件循环），会轮询大的事件队列并处理事件。
例如，浏览器当前正在忙于处理onclick事件，这时另外一个事件发生了（如：window onSize），这个异步事件就被放入事件队列等待处理，只有前面的处理完毕了，空闲了才会执行这个事件。
setTimeout也是一样，当调用的时候，js引擎会启动定时器timer，大约xxms以后执行xxx，当定时器时间到，就把该事件放到主事件队列等待处理（浏览器不忙的时候才会真正执行）。

每个浏览器具体实现主事件队列不尽相同，这不谈了。
浏览器不是单线程的

虽然JS运行在浏览器中，是单线程的，每个window一个JS线程，但浏览器不是单线程的，例如Webkit或是Gecko引擎，都可能有如下线程：

    javascript引擎线程
    界面渲染线程
    浏览器事件触发线程
    Http请求线程

很多童鞋搞不清，如果js是单线程的，那么谁去轮询大的Event loop事件队列？答案是浏览器会有单独的线程去处理这个队列。
Ajax异步请求是否真的异步?

很多童鞋搞不清楚，既然说JavaScript是单线程运行的，那么XMLHttpRequest在连接后是否真的异步?
其实请求确实是异步的，这请求是由浏览器新开一个线程请求（见前面的浏览器多线程）。
当请求的状态变更时，如果先前已设置回调，这异步线程就产生状态变更事件放到 JavaScript引擎的事件处理队列中等待处理。
当浏览器空闲的时候出队列任务被处理，JavaScript引擎始终是单线程运行回调函数。javascript引擎确实是单线程处理它的任务队列，能理解成就是普通函数和回调函数构成的队列。

总结一下，Ajax请求确实是异步的，这请求是由浏览器新开一个线程请求，事件回调的时候是放入Event loop单线程事件队列等候处理。
setTimeout(func, 0)为什么有时候有用？

写js多的童鞋可能发现，有时候加一个setTimeout(func, 0)非常有用，为什么？难道是模拟多线程吗？错！前面已经说过了，javascript是JS运行在浏览器中，是单线程的，
每个window一个JS线程，既然是单线程的，setTimeout(func, 0)神奇在哪儿？那就是告诉js引擎，在0ms以后把func放到主事件队列中，等待当前的代码执行完毕再执行，
注意：重点是改变了代码流程，把func的执行放到了等待当前的代码执行完毕再执行。这就是它的神奇之处了。它的用处有三个：

    让浏览器渲染当前的变化（很多浏览器UI render和js执行是放在一个线程中，线程阻塞会导致界面无法更新渲染）
    重新评估”script is running too long”警告
    改变执行顺序

例如：下面的例子，点击按钮就会显示"calculating...."，如果删除setTimeout就不会。因为reDraw事件被进入事件队列到长时间操作的最后才能被执行，所以无法刷新。

<button id='do'> Do long calc!</button>
<div id='status'></div>
<div id='result'></div>


$('#do').on('click', function(){

  $('#status').text('calculating....'); //此处会触发redraw事件的fired，但会放到队列里执行，直到long()执行完。

  // without set timeout, user will never see "calculating...."
  //long();//执行长时间任务，阻塞

  // with set timeout, works as expected
  setTimeout(long,50);//用定时器，大约50ms以后执行长时间任务，放入执行队列，但在redraw之后了，根据先进先出原则

 })



function long(){
  var result = 0
  for (var i = 0; i<1000; i++){
    for (var j = 0; j<1000; j++){
      for (var k = 0; k<1000; k++){
        result = result + i+j+k
      }
    }
  }
  $('#status').text('calclation done') // has to be in here for this example. or else it will ALWAYS run instantly. This is the same as passing it a callback
}
非阻塞js的实现（non-blocking javascript）

js在浏览器中需要被下载、解释并执行这三步。在html body标签中的script都是阻塞的。也就是说，顺序下载、解释、执行。尽管Chrome可以实现多线程并行下载外部资源，例如：script file、image、frame等（css比较复杂，在IE中不阻塞下载，但Firefox阻塞下载）。但是，由于js是单线程的，所以尽管浏览器可以并发加快js的下载，但必须依次执行。所以chrome中image图片资源是可以并发下载的，但外部js文件并发下载没有多大意义。

要实现非阻塞js（non-blocking javascript）有两个方法：1. html5 2. 动态加载js

首先一种办法是HTML5的defer和async关键字：

defer

<script type="text/javascript" defer src="foo.js"></script>

async

<script type="text/javascript" async src="foo.js"></script>

然后第二种方法是动态加载js：

setTimeout(function(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "foo.js";
    var head = true; //加在头还是尾
    if(head)
      document.getElementsByTagName("head")[0].appendChild(script);
    else
      document.body.appendChild(script);
}, 0);

//另外一个独立的动态加载js的函数
function loadJs(jsurl, head, callback){
    var script=document.createElement('script');
    script.setAttribute("type","text/javascript");

    if(callback){
        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }
    }
    script.setAttribute("src", jsurl);

    if(head)
     document.getElementsByTagName('head')[0].appendChild(script);
    else
      document.body.appendChild(script);

    转载：  www.cnblogs.com/Mainz/p/3552717.html
