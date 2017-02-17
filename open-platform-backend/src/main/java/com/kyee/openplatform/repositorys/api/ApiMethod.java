package com.kyee.openplatform.repositorys.api;


import lombok.Data;

import java.util.List;

@Data
public class ApiMethod {

    private final String id;
    private final String parentId;
    private final String name;
    private final String intro;
}
