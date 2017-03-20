package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.web.DocAuthority;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.pojo.DocAndChapters;
import com.kyee.openplatform.repositorys.doc.Chapter;
import com.kyee.openplatform.repositorys.user.UserInfo;
import com.kyee.openplatform.service.DocService;
import com.kyee.openplatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/doc")
public class DocController {

    @Autowired
    DocService docService;

    @Autowired
    UserService userService;

    @RequestMapping("/chapters/{docId}")
    public ResultApi chaptersByDoc(@PathVariable String docId) {
        DocAndChapters docAndChapters = new DocAndChapters();
        docAndChapters.setChapters(docService.chaptersByDoc(docId));
        docAndChapters.setDoc(docService.docById(docId));
        return ResultApi.successInstance(docAndChapters);
    }

    @RequestMapping("chapter/new")
    public ResultApi newChapter(UserInfo userInfo, Chapter chapter) throws Exception {
        if (!userService.getDocAuthority(userInfo.getUserInfoId(), chapter.getDocId())) {
            throw new Exception("您没有编辑权限.");
        }
        chapter.setId(chapter.getDocId()+"$"+chapter.getName());
        chapter.setLastUpdater(userInfo.getUserInfoName());
        docService.newChapter(chapter);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("chapter/update")
    public ResultApi updateChapter(UserInfo userInfo, Chapter chapter) throws Exception {
        if (!userService.getDocAuthority(userInfo.getUserInfoId(), chapter.getDocId())) {
            throw new Exception("您没有编辑权限.");
        }
        chapter.setLastUpdater(userInfo.getUserInfoName());
        docService.updateChapter(chapter);
        return ResultApi.SUCCESS;
    }


    @RequestMapping("/authority/{docId}")
    public ResultApi getDocAuthority(UserInfo userInfo, @PathVariable String docId) {
        return ResultApi.successInstance(userService.getDocAuthority(userInfo.getUserInfoId(), docId));
    }

}
