window对象
===
window对象是客户端js的核心，代表当前浏览器窗口（可以通过iframe内置多个window），是客户端js的全局对象。
本章介绍window对象的常用属性和方法。

## location
window的location属性和document的location属性都指向同一个Location对象。它表示当前窗口的url。
Location对象包含以下属性：
* href： 当前窗口的url的完整字符串。
* url分解属性： protocol, host, hostname, port, pathname。
* 参数属性： search(?后), hash(#后)

Location提供assign, replace（删除历史）, reload刷新，跳转页面。也可以直接location = 'newUrl'来跳转。

## history
window的history属性指向History对象，提供了forward,back,go等方法访问历史记录。

## screen
Screen对象是非标准但广泛实现的，可以通过它获得当前窗口的大小等信息，以确定当前设备的屏幕大小等。

## 对话框
window提供了4个方法来显示对话框：
* alert: 提示文本。
* confirm: 确认或取消。
* prompt: 等待用户输入一个字符串并返回。
* showModalDialog: 显示一个用户自定义的对话框。

## 多窗口
通过iframe可以实现当前窗口多个window对象，但是js的最佳实际不建议使用iframe，这里不展开介绍。
