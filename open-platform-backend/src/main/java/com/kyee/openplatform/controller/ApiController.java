package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.repositorys.api.ApiComponent;
import com.kyee.openplatform.repositorys.api.ApiMethod;
import com.kyee.openplatform.repositorys.api.ApiParam;
import com.kyee.openplatform.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    ApiService apiService;

    @RequestMapping("/save")
    public String save() {
        apiService.save();
        return "ok";
    }

    @RequestMapping("/components")
    public ResultApi apiComponents() {
        return ResultApi.successInstance(apiService.apiComponentByClazz("jar"));
    }

    @RequestMapping("/services")
    public ResultApi apiServices() {
        return ResultApi.successInstance(apiService.apiComponentByClazz("service"));
    }


    @RequestMapping("/component/{id}")
    public ResultApi apiMethodsById(@PathVariable("id") String id) {

        return ResultApi.successInstance(apiService.apiMethodsByParentId(id));
    }

    public String saveComponent(String name, String type, String desc, String icon) {
//        apiService.saveComponent(new ApiComponent());
        return "ok";
    }

    @RequestMapping("/method/{id}")
    public ResultApi apiParamsById(@PathVariable("id") String id) {
        return ResultApi.successInstance(apiService.apiParamsByParentId(id));
    }


}
