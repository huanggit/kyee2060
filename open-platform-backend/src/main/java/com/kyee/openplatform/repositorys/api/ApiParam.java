package com.kyee.openplatform.repositorys.api;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ApiParam {

    @Id
    private final String id;
    private final String parentId;
    private final String name;
    private final String type;
    private final String desc;
    private final String sample;
    private final String clazz;
}
