package com.kyee.openplatform.repositorys.user;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class UserInfo {

    @Id
    private final String userInfoId;
    private final String userInfoName;
    private final String userInfoDept;
}
