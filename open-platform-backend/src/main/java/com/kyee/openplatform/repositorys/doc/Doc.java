package com.kyee.openplatform.repositorys.doc;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Doc {
    @Id
    private String id;
    private String name;
    private String type;
    private String icon;
    private String author;
    private String lastUpdater;
}
