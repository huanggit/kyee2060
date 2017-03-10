package com.kyee.openplatform.config.web;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ResultApi<T> {
    private Boolean success;
    private String message;
    private final T data;

    public static final ResultApi SUCCESS = new ResultApi(true, "", null);

    public static ResultApi successInstance(Object result) {
        return new ResultApi(true, "", result);
    }

    public static ResultApi failedInstance(String msg) {
        return new ResultApi(false, msg, null);
    }
}
