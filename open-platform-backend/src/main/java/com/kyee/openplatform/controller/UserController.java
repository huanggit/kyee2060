package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.anno.CacheControl;
import com.kyee.openplatform.config.anno.DocAuthority;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.repositorys.user.UserInfo;
import com.kyee.openplatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@RestController
public class UserController {

    @Autowired
    UserService userService;


    @DocAuthority("anonymous")
    @RequestMapping("/")
    public String index() {
        return "connection ok!";
    }

    @DocAuthority("anonymous")
    @RequestMapping("/doLogin")
    public ResultApi login(HttpServletRequest request,
                           String userName, String password) throws Exception {
        String token = userService.getLoginToken(userName, password);
        if (token == null) {
            return ResultApi.successInstance(false);
        }
        UserInfo userInfo = userService.getUserInfo(userName, token);
        HttpSession session = request.getSession(true);
        session.setAttribute("userInfo", userInfo);
        return ResultApi.successInstance(true);
    }

    @DocAuthority("anonymous")
    @RequestMapping("/isLogin")
    public Boolean isLogin(UserInfo user) {
        return user != null;
    }

    @DocAuthority("anonymous")
    @RequestMapping("/doLogout")
    public ResultApi doLogout(HttpServletRequest request) throws IOException {
        HttpSession session = request.getSession(true);
        session.removeAttribute("userInfo");
        return ResultApi.successInstance(true);
    }

    @CacheControl(600)
    @RequestMapping("/isAdmin")
    public ResultApi isAdmin(UserInfo user){
        return ResultApi.successInstance(userService.isAdmin(user.getUserInfoId()));
    }

    @CacheControl(600)
    @RequestMapping("/isAuthor")
    public ResultApi isAuthor(UserInfo user){
        return ResultApi.successInstance(userService.isAuthor(user.getUserInfoId()));
    }

}
