package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.repositorys.user.UserInfo;
import com.kyee.openplatform.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/like")
public class LikeController {

    @Autowired
    LikeService likeService;

    @RequestMapping("/isLike/{title}")
    public ResultApi isLike(UserInfo userInfo, @PathVariable("title") String title) {
        return ResultApi.successInstance(likeService.isLike(userInfo.getId(), title));
    }

    @RequestMapping("/toggle/{title}")
    public ResultApi toggle(UserInfo userInfo, @PathVariable("title") String title) {
        likeService.toggleike(userInfo.getId(),title);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("/countGroupingByTitle")
    public ResultApi getLikesGroupingByTitle(){
        return ResultApi.successInstance(likeService.getLikesGroupingByTitle());
    }

}
