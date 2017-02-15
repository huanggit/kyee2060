package com.kyee.openplatform.repositorys.apiservice;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ApiService {
    @Id
    private final String id;
    private final String name;
    private final String desc;
    private final String logo;
    private final int uv;
    private final int like;
}
