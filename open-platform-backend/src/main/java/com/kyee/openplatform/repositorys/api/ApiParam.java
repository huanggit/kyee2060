package com.kyee.openplatform.repositorys.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class ApiParam {

    @Id
    private String id;
    private String parentId;
    private String name;
    private String type;
    private String desc;
    private String sample;
    private String clazz;
}
