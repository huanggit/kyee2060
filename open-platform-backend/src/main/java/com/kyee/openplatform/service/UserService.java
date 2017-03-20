package com.kyee.openplatform.service;

import com.google.gson.Gson;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.pojo.HrpQueryResult;
import com.kyee.openplatform.repositorys.user.UserInfo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Value("${hrp.url}")
    private String hrpUrl;

    @Value("${authority.admin}")
    private List<String> authorityAdmin;

    @Value("${authority.author}")
    private List<String> authorityAuthor;

    private final List<String> adminDocs = Arrays.asList("tech", "dev", "ops", "ui");

    private RestTemplate rt = new RestTemplate();
    private HttpHeaders headers = new HttpHeaders();
    private Gson gson = new Gson();

    @PostConstruct
    public void init() {
        headers.setContentType(MediaType.parseMediaType("application/x-www-form-urlencoded; charset=UTF-8"));
    }

    public String getLoginToken(String userName, String password) throws IOException {
        LinkedMultiValueMap loginInfo = new LinkedMultiValueMap<String, String>();
        loginInfo.add("CheckOnlineUser", "false");
        loginInfo.add("op", "getTokenInfo");
        loginInfo.add("USERNAME", userName);
        loginInfo.add("PASSWORD", password);
        loginInfo.add("SYSTEM", "KYEE");
        String tokenJson = rt.postForObject(hrpUrl + "LoginHandler.jspx", new HttpEntity(loginInfo, headers), String.class);
        ResultApi<String> token = gson.fromJson(tokenJson, ResultApi.class);
        if (token == null || !token.getSuccess())
            return null;
        return token.getData();
    }

    @Cacheable(value = "getUserInfo", key = "#userName")
    public UserInfo getUserInfo(String userName, String token) throws Exception {
        LinkedMultiValueMap tokenInfo = new LinkedMultiValueMap<String, String>();
        tokenInfo.add("CheckOnlineUser", "false");
        tokenInfo.add("op", "Query");
        tokenInfo.add("token", token);
        tokenInfo.add("page", "1");
        tokenInfo.add("rows", "1");
        tokenInfo.add("obj", "{\"LOGIN_NAME\":\"" + userName + "\"}");
        String userJson = rt.postForObject(hrpUrl + "UserPermSetting/UserPermSettingHandler.jspx", new HttpEntity(tokenInfo, headers), String.class);
        HrpQueryResult user = gson.fromJson(userJson, HrpQueryResult.class);
        if (user == null || user.getTotal() < 1) {
            throw new Exception("token未获取用户信息");
        }
        Map<String, String> map = user.getRows().get(0);
        return new UserInfo(userName, map.get("USER_NAME"), map.get("DEPT_NAME"));
    }

    @Cacheable("getDocAuthority")
    public boolean getDocAuthority(String userId, String docId){
        if (adminDocs.contains(docId) && authorityAdmin.contains(userId)) {
            return true;
        }
        return authorityAdmin.contains(userId) || authorityAuthor.contains(userId);
    }
}
