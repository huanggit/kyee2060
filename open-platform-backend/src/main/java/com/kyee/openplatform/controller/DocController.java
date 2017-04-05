package com.kyee.openplatform.controller;

import com.kyee.openplatform.config.anno.CacheControl;
import com.kyee.openplatform.config.web.ResultApi;
import com.kyee.openplatform.pojo.DocAndChapters;
import com.kyee.openplatform.repositorys.doc.Chapter;
import com.kyee.openplatform.repositorys.doc.Doc;
import com.kyee.openplatform.repositorys.user.UserInfo;
import com.kyee.openplatform.service.DocService;
import com.kyee.openplatform.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

@RestController
@RequestMapping("/doc")
@Log4j2
public class DocController {

    @Autowired
    DocService docService;

    @Autowired
    UserService userService;

    @Value("${file.address}")
    private String fileAddress;

    @CacheControl
    @RequestMapping("/type/{type}")
    public ResultApi docsByType(@PathVariable String type) {
        return ResultApi.successInstance(docService.docsByType(type));
    }

    @RequestMapping("/new")
    public ResultApi newDoc(UserInfo userInfo, Doc doc) throws Exception {
        if (!userService.isAuthor(userInfo.getUserInfoId())) {
            throw new Exception("您没有编辑权限.");
        }
        doc.setLastUpdater(userInfo.getUserInfoName());
        docService.newDoc(doc);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("/update")
    public ResultApi updateDoc(UserInfo userInfo, Doc doc) throws Exception {
        if (!userService.isAuthor(userInfo.getUserInfoId())) {
            throw new Exception("您没有编辑权限.");
        }
        doc.setLastUpdater(userInfo.getUserInfoName());
        docService.updateDoc(doc);
        return ResultApi.SUCCESS;
    }

    @RequestMapping("/delete/{id}")
    public ResultApi deleteDoc(UserInfo userInfo, @PathVariable String id) throws Exception {
        if (!userService.isAuthor(userInfo.getUserInfoId())) {
            throw new Exception("您没有编辑权限.");
        }
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
        chapter.setId(chapter.getDocId() + "$" + chapter.getName());
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

    @PostMapping(value = "/img/upload")
    public ResultApi imgUpload(@RequestParam(name = "file") MultipartFile img) throws Exception {
        if (img == null) {
            throw new Exception("上传文件为空。");
        }
        String imgName = img.getOriginalFilename();
        File imgDir = new File(fileAddress);
        for (File existsFile : imgDir.listFiles()) {
            if (imgName.equals(existsFile.getName())) {
                throw new Exception("该文件名已存在。");
            }
        }
        File dest = new File(fileAddress + imgName);
        img.transferTo(dest);
        return ResultApi.SUCCESS;
    }
}
