package com.kyee.openplatform.repositorys.doc;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;

@Data
public class Chapter {
    @Id
    private String id;
    @NotBlank
    private String docId;
    @NotBlank
    private String name;
    @NotBlank
    private String content;
    @NotBlank
    private String lastUpdater;
}
