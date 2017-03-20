映射&视图
===

### Controller
Controller的实现异常简单，只要在方法上添加@Controller注解就可以了。如果是前后端分离的rest服务，为了避免在每个方法上添加@ResponseBody，
可以使用@RestController注解。
```java
@Controller
public class HomeController {
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Quick Start!";
    }
}

@RestController
public class HomeController {
    @RequestMapping("/")
    String home() {
        return "Quick Start!";
    }
}
```

***
### url映射
@RequestMapping注解用来映射url和对应的处理方法。@PathVariable可以用来绑定rest风格url中的参数。
也可以使用@GetMapping和@PostMapping等注解来省略@RequestMapping中的method，化简配置。
```java
@RestController
@RequestMapping("/home")
public class HomeController {
    @RequestMapping(path = "/get/{day}", method = RequestMethod.GET)
    public String getByDay(@PathVariable @DateTimeFormat(iso=ISO.DATE) Date day) {
        return "get!";
    }

    @PostMapping("/post")
    public String postByDay(@RequestParam @DateTimeFormat(iso=ISO.DATE) Date day) {
        return "post!";
    }
}
```