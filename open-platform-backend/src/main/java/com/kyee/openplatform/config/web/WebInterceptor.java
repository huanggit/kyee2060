package com.kyee.openplatform.config.web;

import com.kyee.openplatform.repositorys.user.UserInfo;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;


@Log4j2
@Component
public class WebInterceptor extends HandlerInterceptorAdapter {

    private static final String START_TIME_KEY = "START_TIME_KEY";

    @Value("${authority}")
    private Map<String, List<String>> authority;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        setStartTime(request);
        if (!HandlerMethod.class.isAssignableFrom(handler.getClass())) return true;
        return isDocAuthorized((Method) handler, getSessionUser(request));
    }

    @Override
    public void postHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        Long startTime = (Long) requestAttributes.getAttribute(START_TIME_KEY, RequestAttributes.SCOPE_REQUEST);
        long cost = System.currentTimeMillis() - startTime;
        log.info("[response http] request：{}, from: {}, time cost: {} ms.",
                request.getRequestURI(), request.getRemoteAddr(), cost);
    }


    private void setStartTime(HttpServletRequest request) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        if (requestAttributes.getAttribute(
                START_TIME_KEY, RequestAttributes.SCOPE_REQUEST) == null)
            requestAttributes.setAttribute(START_TIME_KEY, System.currentTimeMillis(),
                    RequestAttributes.SCOPE_REQUEST);
    }

    public static UserInfo getSessionUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        UserInfo user = (session == null) ? null : (UserInfo) session.getAttribute("userInfo");
        return user;
    }


    private boolean isDocAuthorized(Method handlerMethod, UserInfo user) {
        DocAuthority docAuthority = AnnotationUtils.findAnnotation(handlerMethod, DocAuthority.class);
        if (docAuthority == null && user != null) {
            return true;
        }
        if ("anonymous".equals(docAuthority.value())) {
            return true;
        }
        if (user == null) {
            return false;
        }
        return authority.get(docAuthority.value()).contains(user.getId());
    }
}

