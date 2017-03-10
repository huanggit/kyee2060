package com.kyee.openplatform.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.pojo.HrpQueryResult;
import com.kyee.openplatform.repositorys.user.UserInfo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Value("${hrp.url}")
    private String hrpUrl;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/doLogin")
    public ResultApi login(HttpServletRequest request,
                           String userName, String password) throws IOException {
        UserInfo userInfo = checkUserPassword(userName, password);
        if (userInfo == null) {
            return ResultApi.successInstance(false);
        }
        HttpSession session = request.getSession(true);
        session.setAttribute("userInfo", userInfo);
        return ResultApi.successInstance(true);
    }

    private UserInfo checkUserPassword(String userName, String password) throws IOException {
        RestTemplate rt = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/x-www-form-urlencoded; charset=UTF-8"));
        Gson gson = new Gson();
        LinkedMultiValueMap loginInfo = new LinkedMultiValueMap<String, String>();
        loginInfo.add("CheckOnlineUser", "false");
        loginInfo.add("op", "getTokenInfo");
        loginInfo.add("USERNAME", userName);
        loginInfo.add("PASSWORD", password);
        loginInfo.add("SYSTEM", "KYEE");
        String tokenJson = rt.postForObject(hrpUrl+"LoginHandler.jspx", new HttpEntity(loginInfo, headers), String.class);
        ResultApi<String> token = gson.fromJson(tokenJson, ResultApi.class);
        if (token == null || !token.getSuccess())
            return null;
        LinkedMultiValueMap tokenInfo = new LinkedMultiValueMap<String, String>();
        tokenInfo.add("CheckOnlineUser", "false");
        tokenInfo.add("op", "Query");
        tokenInfo.add("token", token.getData());
        tokenInfo.add("page", "1");
        tokenInfo.add("rows", "1");
        tokenInfo.add("obj", "{\"LOGIN_NAME\":\"" + userName + "\"}");
        String userJson = rt.postForObject(hrpUrl+"UserPermSetting/UserPermSettingHandler.jspx", new HttpEntity(tokenInfo, headers), String.class);
        HrpQueryResult user = gson.fromJson(userJson, HrpQueryResult.class);
        if (user == null || user.getTotal() < 1) {
            return null;
        }
        Map<String, String> map = user.getRows().get(0);
        return new UserInfo(userName, map.get("USER_NAME"), map.get("DEPT_NAME"));
    }

    @RequestMapping("/isLogin")
    public Boolean isLogin(UserInfo user) {
        return user != null;
    }

}
