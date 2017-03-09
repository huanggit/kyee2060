package com.kyee.openplatform.controller;

import com.kyee.openplatform.repositorys.user.UserInfo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
public class UserController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/login")
    public String login(HttpServletRequest request,
                        String username, String password) {
        HttpSession session = request.getSession(true);
        UserInfo userInfo = new UserInfo("id", "name", "dept");
        session.setAttribute("userInfo", userInfo);
        return "ok";
    }

    @RequestMapping("/isLogin")
    public Boolean isLogin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        UserInfo user = (session == null) ? null : (UserInfo) session.getAttribute("userInfo");
        return user != null;
    }

}
