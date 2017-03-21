package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.anno.CacheControl;
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

    @CacheControl
    @RequestMapping("/isLike/{title}")
    public ResultApi isLike(UserInfo userInfo, @PathVariable("title") String title) {
        return ResultApi.successInstance(likeService.isLike(userInfo.getUserInfoId(), title));
    }

    @RequestMapping("/toggle/{title}")
    public ResultApi toggle(UserInfo userInfo, @PathVariable("title") String title) {
        likeService.toggleLike(userInfo.getUserInfoId(),title);
        return ResultApi.SUCCESS;
    }

    @CacheControl
    @RequestMapping("/countGroupingByTitle")
    public ResultApi getLikesGroupingByTitle(){
        return ResultApi.successInstance(likeService.getLikesGroupingByTitle());
    }

}
