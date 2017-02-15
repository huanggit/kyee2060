package com.kyee.openplatform.config.web;

import lombok.Data;

@Data
public class ApiResult<T> {

    private static final String SUCCESS_CODE = "S";

    private static final ApiResult SUCCESS_INSTANCE = new ApiResult(SUCCESS_CODE, null);

    public static ApiResult successInstance() {
        return SUCCESS_INSTANCE;
    }

    public static ApiResult successInstance(Object result) {
        return new ApiResult(SUCCESS_CODE, result);
    }

    public static ApiResult failedInstance(String msg) {
        return new ApiResult(msg, null);
    }

    private final String msg;
    private final T result;
}
