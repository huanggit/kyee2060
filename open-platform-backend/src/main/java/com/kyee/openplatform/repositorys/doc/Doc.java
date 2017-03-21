package com.kyee.openplatform.repositorys.doc;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doc {
    @Id
    @Pattern(regexp = "^[A-Za-z0-9]+$")
    private String id;
    private String name;
    private String type;
    private String icon;
    private String author;
    private String lastUpdater;
}
