package com.kyee.openplatform.repositorys.doc;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Pattern;

@Data
public class Chapter {
    @Id
    @Pattern(regexp = "^[A-Za-z0-9]+$")
    private String id;
    @NotBlank
    @Pattern(regexp = "^[A-Za-z0-9]+$")
    private String docId;
    @NotBlank
    private String name;
    @NotBlank
    private String content;
    @NotBlank
    private String lastUpdater;
    @NotBlank
    private boolean html;
}
