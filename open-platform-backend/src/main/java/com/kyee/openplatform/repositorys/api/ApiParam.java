package com.kyee.openplatform.repositorys.api;

import lombok.Data;

@Data
public class ApiParam {
    private final String name;
    private final String type;
    private final String desc;
    private final String sample;
}
