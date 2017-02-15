package com.kyee.openplatform.controller;

import com.kyee.openplatform.repositorys.apicomponent.ApiComponent;
import com.kyee.openplatform.repositorys.apicomponent.ApiComponentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    ApiComponentRepository componentRepository;

    @RequestMapping("/save")
    public String save() {
        ApiComponent apiComponent = new ApiComponent("1", "权限管理", 1, "x", "cog", 245, 8);
        componentRepository.save(apiComponent);
        ApiComponent x = new ApiComponent("2", "消息推送", 1, "x", "user", 145, 2);
        componentRepository.save(x);
        return "1";
    }

    @RequestMapping("/findAll")
    public List<ApiComponent> findAll() {
        return componentRepository.findAll();
    }
}
