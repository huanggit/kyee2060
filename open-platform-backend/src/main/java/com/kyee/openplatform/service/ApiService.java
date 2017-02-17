package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ApiService {

    @Autowired
    ApiComponentRepository componentRepository;

    @Autowired
    ApiMethodRepository apiMethodRepository;

    @Autowired
    ApiParamRepository apiParamRepository;

    public void save() {
        componentRepository.save(new ApiComponent("1", "权限管理", "back", "x", "cog", 245, 8, "jar"));
        componentRepository.save(new ApiComponent("2", "消息推送", "back", "x", "user", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("3", "网页视频", "front", "x", "send", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("4", "验证主键", "front", "x", "list-alt", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("5", "IOS消息推送", "app", "x", "home", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("6", "cordova通讯插件", "app", "x", "globe", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("7", "疾病组件", "bus", "bus", "fire", 145, 2, "jar"));
        componentRepository.save(new ApiComponent("8", "体温表组件", "bus", "bus", "filter", 145, 2, "jar"));
        apiMethodRepository.save(new ApiMethod("1","1","获取用户信息","获取用户信息"));
        apiParamRepository.save(new ApiParam("1", "1", "personId", "long", "用户ID", "272300007148", "req"));
        apiParamRepository.save(new ApiParam("2", "1", "timestamp", "string", "发送请求的时间，格式\"yyyy-MM-dd HH:mm:ss\"", "2014-07-24 03:07:50", "req"));
        apiParamRepository.save(new ApiParam("3", "1", "personName", "string", "用户姓名", " 张三", "rsp"));
        apiParamRepository.save(new ApiParam("4", "1", "idNo", "string", "用户证件号码", "32011199912121133", "rsp"));
    }

    //@Cacheable
    public Map<String, List<ApiComponent>> apiComponentByClazz(String clazz) {
        List<ApiComponent> apiComponents = componentRepository.findByClazz(clazz);
        apiComponents.sort((a, b) -> b.getViewed() - a.getViewed());
        return apiComponents.stream().collect(Collectors.groupingBy(ApiComponent::getType));
    }

    public List<ApiMethod> apiMethodsByParentId(String parentId) {
        List<ApiMethod> apiMethods = apiMethodRepository.findByParentId(parentId);
        return apiMethods;
    }

    public Map<String, List<ApiParam>> apiParamsByParentId(String parentId) {
        List<ApiParam> apiParams = apiParamRepository.findByParentId(parentId);
        return apiParams.stream().collect(Collectors.groupingBy(ApiParam::getClazz));
    }

}
