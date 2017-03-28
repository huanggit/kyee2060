事件处理
===

客户端js采用异步事件驱动模型，事件是浏览器放送给程序的一个消息，本身并不是js对象。

## 事件类型（event type）
事件主要有3大类，DOM事件，H5的新事件，移动设备事件。
这里只介绍DOM事件。
* 表单事件： submit, reset, change, focus, blur。
* window事件： load, unload, resize, stroll。
* 鼠标事件： click, dblclick, contextmenu, mousemove, mousedown, mouseup, mouseover, mouseout, mousewheel。
* 键盘事件： keypress, keydown, keyup。

## 事件冒泡
在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，
那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

事件冒泡允许多个操作被集中处理（把事件处理器添加到一个父级元素上，避免把事件处理器添加到多个子级元素上），它还可以让你在对象层的不同级别捕获事件。

事件捕获其实有三种方式，事件冒泡只是其中的一种：
* IE从里到外（inside→outside）的冒泡型事件。
* Netscape4.0从外到里（outside→inside）的捕获型事件。
* DOM事件流，先从外到里，再从里到外回到原点（outside→inside→outside）的事件捕获方法。

不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload。

