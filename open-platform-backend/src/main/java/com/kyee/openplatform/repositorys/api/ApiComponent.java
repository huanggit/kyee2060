package com.kyee.openplatform.repositorys.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class ApiComponent {
    @Id
    private String id;
    private String name;
    private String type;
    private String desc;
    private String icon;
    private int viewed;
    private int needed;
    private String clazz;
}
