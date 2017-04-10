DOM文档
===

客户端js通过Document对象对HTML文档进行操作。HTML的DOM文档包含2个重要类：
* Document 代表了DOM的根节点。
* Element 代表了DOM的子节点。

每个window对象都有个document属性，它代表了web页面的内容。

## document选取节点
* id返回单个Element: getElementById(id)
* name属性返回Elements: getElementsByName(name) 只对html有效，对xml无效。
* 标签返回Elements: getElementsByTagName(tagName)
* class返回Elements: getElementsByClassName(className)
* CSS选择器： querySelector(selectors)，querySelectorAll(selectors)

getElements只返回NodeList对象，有length属性，但属于只读的类数组对象，而不是数组，不能直接调用数组方法。

## Element方法
* parentNode
* childNodes
* firstChild, lastChild
* nextSibling, previousSibling
* nodeType
* nodeName
* nodeValue

## 属性
* 标准的HTTP属性和事件处理属性可以直接获取： `var imgUrl = document.getElementById('myImg').src;`
* 非标准属性： `hasAttribute`，`getAttribute`，`removeAttribute`。

非标准属性会导致文档不再是合法的HTML文档，H5提供的解决方案是任意以`data-`为前缀的属性都是合法的HTML属性。

## Element内容
* innerHTML, outHTML
* textContent
* nodeValue
```js
// <p id='myp'>This is a <i>Simple</i> HTML</p>
var myp = document.getElementById(myp);
myp.innerHTML // 字符串：This is a <i>Simple</i> HTML
myp.textContent // 字符串：This is a Simple HTML
myp.nodeValue // 一个Text类型的节点对象
```

