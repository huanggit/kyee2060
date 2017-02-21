package com.kyee.openplatform.config.web;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ResultApi {
    private String msg;

    public static final ResultApi SUCCESS = new ResultApi("ok");
}
