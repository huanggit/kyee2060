package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.service.CountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/count")
public class CountController {

    @Autowired
    CountService countService;

//    @RequestMapping("/need/{componentId}")
//    public ResultApi need(@PathVariable("componentId") String componentId) {
//        countService.needComponent("", componentId);
//        return ResultApi.SUCCESS;
//    }

}
