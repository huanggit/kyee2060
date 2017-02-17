package com.kyee.openplatform.config.web;


import com.kyee.openplatform.repositorys.user.UserInfo;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.http.HttpServletRequest;

@Log4j2
@ControllerAdvice
public class ControllerAdviceHandler {

    @ModelAttribute
    public UserInfo userInfo(HttpServletRequest request) {
        return WebInterceptor.getSessionUser(request);
    }



//    @ExceptionHandler(value = Exception.class)
//    @ResponseBody
//    public ApiResult errorHandler(HttpServletRequest req, Exception e) {
//        log.error("---Exception Handler---", e);
//        return ApiResult.failedInstance(e.getMessage());
//    }
}
