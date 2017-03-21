package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.anno.CacheControl;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.pojo.DocAndChapters;
import com.kyee.openplatform.repositorys.doc.Chapter;
import com.kyee.openplatform.repositorys.doc.Doc;
import com.kyee.openplatform.repositorys.user.UserInfo;
import com.kyee.openplatform.service.DocService;
import com.kyee.openplatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/doc")
public class DocController {

    @Autowired
    DocService docService;

    @Autowired
    UserService userService;

    @CacheControl
    @RequestMapping("/type/{type}")
    public ResultApi docsByType(@PathVariable String type) {
        return ResultApi.successInstance(docService.docsByType(type));
    }

    @RequestMapping("/new")
    public ResultApi newDoc(UserInfo userInfo, Doc doc) throws Exception {
        doc.setLastUpdater(userInfo.getUserInfoName());
        docService.newDoc(doc);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("/update")
    public ResultApi updateDoc(UserInfo userInfo, Doc doc) {
        doc.setLastUpdater(userInfo.getUserInfoName());
        docService.updateDoc(doc);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("/delete/{id}")
    public ResultApi deleteDoc(@PathVariable String id) {
        docService.deleteDoc(id);
        return ResultApi.SUCCESS;
    }

    @CacheControl
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

    @RequestMapping("chapter/delete")
    public ResultApi delChapter(UserInfo userInfo, Chapter chapter) throws Exception {
        if (!userService.getDocAuthority(userInfo.getUserInfoId(), chapter.getDocId())) {
            throw new Exception("您没有编辑权限.");
        }
        docService.deleteChapter(chapter.getId(), chapter.getDocId());
        return ResultApi.SUCCESS;
    }

}
