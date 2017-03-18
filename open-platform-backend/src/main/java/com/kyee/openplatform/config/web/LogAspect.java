package com.kyee.openplatform.config.web;

import lombok.extern.log4j.Log4j2;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.util.StopWatch;

@Log4j2
//@Aspect
//@Configuration
public class LogAspect {

    @Around("@annotation(org.springframework.web.bind.annotation.RequestMapping)")
    public Object log(ProceedingJoinPoint point) throws Throwable {
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        Object result = point.proceed();
        stopWatch.stop();
        log.debug(
                "#method:{} #duration:{} #args:{} #result:{}",
                MethodSignature.class.cast(point.getSignature()).getMethod().getName(),
                stopWatch.getTotalTimeMillis(),
                point.getArgs(),
                result
        );
        return result;
    }

}
