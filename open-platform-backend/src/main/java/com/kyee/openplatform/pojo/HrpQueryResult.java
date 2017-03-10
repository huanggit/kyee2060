package com.kyee.openplatform.pojo;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class HrpQueryResult {
    private Integer total;
    private List<Map<String, String>> rows;
}
