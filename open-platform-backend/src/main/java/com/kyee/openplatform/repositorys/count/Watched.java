package com.kyee.openplatform.repositorys.count;


import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Watched {
    @Id
    private String id;
    private String employeeId;
    private String componentId;
}
