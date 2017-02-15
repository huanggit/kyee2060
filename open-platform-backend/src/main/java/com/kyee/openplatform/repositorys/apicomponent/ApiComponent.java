package com.kyee.openplatform.repositorys.apicomponent;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ApiComponent {
    @Id
    private final String id;
    private final String name;
    private final int type;
    private final String desc;
    private final String icon;
    private final int viewed;
    private final int needed;
}
