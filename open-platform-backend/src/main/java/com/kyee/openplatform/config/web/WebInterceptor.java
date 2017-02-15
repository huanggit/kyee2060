package com.kyee.openplatform.config.web;

import com.kyee.openplatform.repositorys.user.UserInfo;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@Log4j2
public class WebInterceptor extends HandlerInterceptorAdapter {

    private static final String START_TIME_KEY = "START_TIME_KEY";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        setStartTime(request);
        if (!HandlerMethod.class.isAssignableFrom(handler.getClass())) return true;
        UserInfo user = getSessionUser(request);
        if (user != null)
            return true;
//        HandlerMethod handlerMethod = (HandlerMethod) handler;
//        if(isAllowAnonymous(handlerMethod))return true;
        if("/login".equals(request.getRequestURI()))
            return true;
        throw new Exception("请登录");
    }

    @Override
    public void postHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        Long startTime = (Long) requestAttributes.getAttribute(START_TIME_KEY, RequestAttributes.SCOPE_REQUEST);
        long cost = System.currentTimeMillis() - startTime;
        log.info("[response http] request：{}, from: {}, response：{}, time cost: {} ms.",
                request.getRequestURI(), request.getRemoteAddr(), "N/A", cost);
    }

    /**
     * 设置开始时间，记录接口总耗时
     */
    private void setStartTime(HttpServletRequest request) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        if (requestAttributes.getAttribute(
                START_TIME_KEY, RequestAttributes.SCOPE_REQUEST) == null)
            requestAttributes.setAttribute(START_TIME_KEY, System.currentTimeMillis(),
                    RequestAttributes.SCOPE_REQUEST);
    }

    private UserInfo getSessionUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        UserInfo user = (session == null) ? null : (UserInfo) session.getAttribute("userInfo");
        return user;
    }

//    private boolean isAllowAnonymous(HandlerMethod handlerMethod){
//        if(AnnotationUtils.isAnnotationDeclaredLocally(AnonymousAccess.class,handlerMethod.getBeanType()))return true;
//        return handlerMethod.getMethodAnnotation(AnonymousAccess.class) != null;
//    }
}

