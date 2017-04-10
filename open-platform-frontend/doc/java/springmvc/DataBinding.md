数据绑定
===

### @PathVariable
用来绑定rest风格url中的参数。
```java
@RestController
@RequestMapping("/home")
public class HomeController {
    @RequestMapping(path = "/get/{day}", method = RequestMethod.GET)
    public String getByDay(@PathVariable @DateTimeFormat(iso=ISO.DATE) Date day) {
        return "get!";
    }
}
```

***
### @RequestHeader、@CookieValue
@RequestHeader 注解，可以把Request请求header部分的值绑定到方法的参数上。
@CookieValue 可以把Request header中关于cookie的值绑定到方法的参数上。
```java
    @RequestMapping(path = "/get")
    public String getByDay(@RequestHeader("Keep-Alive") long keepAlive
                           @CookieValue("JSESSIONID") String cookie) {
        return "get!";
    }
```

***
### @RequestParam, @RequestBody
@RequestParam常用来处理简单类型的绑定，通过Request.getParameter() 获取的String可直接转换为简单类型的情况。
即可以处理get 方式中queryString的值，也可以处理post方式中 body data的值；
具体来说，是处理Content-Type: 为 application/x-www-form-urlencoded编码的内容，提交方式GET、POST。
```java
    @RequestMapping(path = "/get")
    public String getByType(@RequestParam(required = false, defaultValue = "1")String type) {
        return "get!";
    }
```
@RequestBody常用来处理Content-Type: 不是application/x-www-form-urlencoded编码的内容，例如application/json, application/xml等。
```java
    @RequestMapping(path = "/get", consumes = "application/json")
    public String getByType(@RequestBody String body) {
        return "get!";
    }
```

***
### @SessionAttributes, @ModelAttribute
@SessionAttributes用来绑定HttpSession中的attribute对象的值。
```java
@RestController
@RequestMapping("/home")
@SessionAttributes("user")
public class HomeController {
    @RequestMapping(path = "/get")
    public String get(@ModelAttribute("user") User user) {
        return user.getName();
    }
}
```
@ModelAttribute有两个用法，一个是用于方法上，一个是用于参数上。用在方法上详见`切片管理`章节。
用于参数上时： 用来通过名称对应，把相应名称的值绑定到注解的参数bean上。
```java
    @RequestMapping("/get")
    public String getByType(@ModelAttribute User user) {
        return user.getName();
    }
```

***
### 默认绑定方式
在不给定注解的情况下，参数是怎样绑定的？
* 若要绑定的对象时简单类型：  调用@RequestParam来处理的。
* 若要绑定的对象时复杂类型：  调用@ModelAttribute来处理的。
\n 这里的简单类型指Java的原始类型(boolean, int 等)、原始类型对象（Boolean, Int等）、
String、Date等ConversionService里可以直接String转换成目标对象的类型。