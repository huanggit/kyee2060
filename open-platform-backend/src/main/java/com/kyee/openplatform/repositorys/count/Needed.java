package com.kyee.openplatform.repositorys.count;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Needed {
    @Id
    private String id;
    private String employeeId;
    private String componentId;
}
