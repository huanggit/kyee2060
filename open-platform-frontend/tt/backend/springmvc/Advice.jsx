import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class DataBinding extends Component {
    render() {
        return (
            <RightMarkDown source={['切片管理',
                '===',

                '### @ControllerAdvice',
                '@ControllerAdvice是一个controller层的切片，提供了3种常用的需要在controller层统一处理的逻辑，方便使用。' +
                '@RestControllerAdvice则额外提供了@ExceptionHandler注解上，自动添加@ResponseBody的注解。',
                '* @ModelAttribute 在方法上添加，意味着所有的controller层的所有方法都可以自动装配这个类的实例。',
                '* @InitBinder 特殊类型转换时，需要指定转换方式，如String转Data。',
                '* @ExceptionHandler 遇到exception该如何统一返回。',
                '```java',
                '@Log4j2',
                '@RestControllerAdvice',
                'public class ControllerAdviceHandler {',
                ' ',
                '    @ModelAttribute',
                '    public User user() { return new User};',
                ' ',
                '    @InitBinder',
                '    protected void initBinder(WebDataBinder binder) {',
                '        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");',
                '        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));',
                '    }',
                ' ',
                '    @ExceptionHandler(value = Exception.class)',
                '    public ApiResult errorHandler(HttpServletRequest req, Exception e) {',
                '        log.error("---Exception Handler---", e);',
                '        return ApiResult.failed("system error!");',
                '    }',
                '}',
                '```',
            ]}/>
        )
    }
}
