package com.kyee.openplatform.controller;

import com.kyee.openplatform.service.DocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/doc")
public class DocController {

    @Autowired
    DocService docService;

//    @RequestMapping("/save")
//    public String save() {
//        apiService.save();
//        return "ok";
//    }
//
//    @RequestMapping("/components")
//    public ResultApi apiComponents() {
//        return ResultApi.successInstance(apiService.apiComponentByClazz("jar"));
//    }
//
//    @RequestMapping("/services")
//    public ResultApi apiServices() {
//        return ResultApi.successInstance(apiService.apiComponentByClazz("service"));
//    }
//
//
//    @RequestMapping("/component/{id}")
//    public ResultApi apiMethodsById(@PathVariable("id") String id) {
//
//        return ResultApi.successInstance(apiService.apiMethodsByParentId(id));
//    }
//
//    public String saveComponent(String name, String type, String desc, String icon) {
//        apiService.saveComponent(new ApiComponent());
//        return "ok";
//    }
//
//    @RequestMapping("/method/{id}")
//    public ResultApi apiParamsById(@PathVariable("id") String id) {
//        return ResultApi.successInstance(apiService.apiParamsByParentId(id));
//    }


}
