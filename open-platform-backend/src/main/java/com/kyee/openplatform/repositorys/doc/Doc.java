package com.kyee.openplatform.repositorys.doc;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doc {
    @Id
    @Pattern(regexp = "^[A-Za-z0-9]+$")
    @NotBlank
    private String id;
    @NotBlank
    private String name;
    @NotBlank
    private String type;
    @NotBlank
    private String icon;
    @NotBlank
    private String author;
    private String lastUpdater;
}
