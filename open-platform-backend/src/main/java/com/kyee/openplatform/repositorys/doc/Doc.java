package com.kyee.openplatform.repositorys.doc;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Doc {
    @Id
    private String id;
    private String name;
    private String type;
    private String icon;

}
