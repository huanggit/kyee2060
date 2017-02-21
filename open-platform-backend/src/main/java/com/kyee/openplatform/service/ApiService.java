package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.api.*;
import com.kyee.openplatform.util.IdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

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
        componentRepository.save(new ApiComponent("9", "登录+权限管理", "inner", "x", "cog", 715, 21, "service"));
        componentRepository.save(new ApiComponent("10", "短信发送", "inner", "x", "user", 145, 2, "service"));
        componentRepository.save(new ApiComponent("11", "邮件发送", "inner", "x", "send", 45, 11, "service"));
        componentRepository.save(new ApiComponent("12", "语音对接", "outer", "x", "send", 45, 11, "service"));
        componentRepository.save(new ApiComponent("13", "IM对接", "outer", "x", "send", 45, 11, "service"));
        componentRepository.save(new ApiComponent("14", "微信公众号对接", "outer", "x", "send", 45, 11, "service"));
        componentRepository.save(new ApiComponent("15", "OSS对接", "outer", "x", "send", 45, 11, "service"));
        componentRepository.save(new ApiComponent("16", "天气预报对接", "outer", "x", "send", 45, 11, "service"));
        apiMethodRepository.save(new ApiMethod("1","1","获取用户信息","获取用户信息"));
        apiMethodRepository.save(new ApiMethod("2","1","修改用户信息","修改用户信息"));
        apiMethodRepository.save(new ApiMethod("3","9","修改用户信息","修改用户信息"));
        apiParamRepository.save(new ApiParam("1", "1", "personId", "long", "用户ID", "272300007148", "req"));
        apiParamRepository.save(new ApiParam("2", "1", "timestamp", "string", "发送请求的时间，格式\"yyyy-MM-dd HH:mm:ss\"", "2014-07-24 03:07:50", "req"));
        apiParamRepository.save(new ApiParam("3", "1", "personName", "string", "用户姓名", " 张三", "rsp"));
        apiParamRepository.save(new ApiParam("4", "1", "idNo", "string", "用户证件号码", "32011199912121133", "rsp"));
        apiParamRepository.save(new ApiParam("5", "2", "idNo", "string", "用户证件号码", "32011199912121133", "req"));
        apiParamRepository.save(new ApiParam("6", "2", "idNo", "string", "用户证件号码", "32011199912121133", "rsp"));
        apiParamRepository.save(new ApiParam("7", "3", "idNo", "string", "用户证件号码", "32011199912121133", "req"));
        apiParamRepository.save(new ApiParam("8", "3", "idNo", "string", "用户证件号码", "32011199912121133", "rsp"));
    }

    public void saveComponent(ApiComponent apiComponent) {
        if (StringUtils.isEmpty(apiComponent.getId())) {
            apiComponent.setId(IdUtil.uuid());
        }
        componentRepository.save(apiComponent);
    }

    public void deleteComponent(String id) {
        componentRepository.delete(id);
    }

    //@Cacheable
    public Map<String, List<ApiComponent>> apiComponentByClazz(String clazz) {
        List<ApiComponent> apiComponents = componentRepository.findByClazz(clazz);
        apiComponents.sort((a, b) -> b.getViewed() - a.getViewed());
        return apiComponents.stream().collect(Collectors.groupingBy(ApiComponent::getType));
    }

    public void saveApiMethod(ApiMethod apiMethod) {
        if (StringUtils.isEmpty(apiMethod.getId())) {
            apiMethod.setId(IdUtil.uuid());
        }
        apiMethodRepository.save(apiMethod);
    }

    public void deleteApiMethod(String id) {
        apiMethodRepository.delete(id);
    }

    public List<ApiMethod> apiMethodsByParentId(String parentId) {
        List<ApiMethod> apiMethods = apiMethodRepository.findByParentId(parentId);
        return apiMethods;
    }

    public void saveApiParam(ApiParam apiParam) {
        if (StringUtils.isEmpty(apiParam.getId())) {
            apiParam.setId(IdUtil.uuid());
        }
        apiParamRepository.save(apiParam);
    }

    public void deleteApiParam(String id) {
        apiParamRepository.delete(id);
    }

    public Map<String, List<ApiParam>> apiParamsByParentId(String parentId) {
        List<ApiParam> apiParams = apiParamRepository.findByParentId(parentId);
        return apiParams.stream().collect(Collectors.groupingBy(ApiParam::getClazz));
    }

}
