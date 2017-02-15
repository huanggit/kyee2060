package com.kyee.openplatform.repositorys.api;


import lombok.Data;

import java.util.List;

@Data
public class ApiEntry {

    private String id;
    private String name;
    private String intro;
    private final List<ApiParam> request;
    private final List<ApiParam> response;
}
