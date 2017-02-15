package com.kyee.openplatform.repositorys.user;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class UserInfo {

    @Id
    private final String id;
    private final String name;
    private final String dept;
}
