package com.kyee.openplatform.repositorys.api;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiMethod {

    private String id;
    private String parentId;
    private String name;
    private String intro;
}
