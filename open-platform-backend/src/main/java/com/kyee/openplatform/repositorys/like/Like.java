package com.kyee.openplatform.repositorys.like;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Like {
    @Id
    private String id;
    private String userId;
    private String title;
}
