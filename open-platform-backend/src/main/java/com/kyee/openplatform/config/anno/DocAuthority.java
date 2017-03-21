package com.kyee.openplatform.config.anno;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface DocAuthority {
    String value() default "ro";
}