package com.kyee.openplatform.config.web;


import com.kyee.openplatform.repositorys.user.UserInfo;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@Log4j2
@RestControllerAdvice
public class ControllerAdviceHandler {

    @ModelAttribute
    public UserInfo userInfo(HttpServletRequest request) {
        return WebInterceptor.getSessionUser(request);
    }



    @ExceptionHandler(value = Exception.class)
    public ResultApi errorHandler(Exception e) {
        log.error("---Exception ---", e);
        return ResultApi.failedInstance(e.getMessage());
    }
}
