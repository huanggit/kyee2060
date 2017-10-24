package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.doc.Chapter;
import com.kyee.openplatform.repositorys.doc.ChapterRepository;
import com.kyee.openplatform.repositorys.doc.Doc;
import com.kyee.openplatform.repositorys.doc.DocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;


@Service
public class DocService {

    @Autowired
    DocRepository docRepository;

    @Autowired
    ChapterRepository chapterRepository;

    @PostConstruct
    public void init() {
        try {
            newDoc(new Doc("tech", "推荐技术选型", "home", "paperclip", "傅正鑫，李兴", "system"));
        } catch (Exception e) {
        }
        try {
            newDoc(new Doc("dev", "研发规范", "dev", "home", "任亚楠", "system"));
        } catch (Exception e) {
        }
        try {
            newDoc(new Doc("ops", "运维机制", "ops", "home", "李君强", "system"));
        } catch (Exception e) {
        }
        try {
            newDoc(new Doc("ui", "UI资源", "ui", "home", "高云鹏", "system"));
        } catch (Exception e) {
        }
    }

    public boolean docIdAlreadyExists(String id) {
        return docRepository.findOne(id) != null;
    }

    @Cacheable("docsByType")
    public List<Doc> docsByType(String type) {
        return docRepository.findByType(type);
    }

    @Cacheable("docById")
    public Doc docById(String id) {
        return docRepository.findOne(id);
    }

    @CacheEvict(value = "docsByType", allEntries = true)
    public void newDoc(Doc doc) throws Exception {
        if (docIdAlreadyExists(doc.getId())) {
            throw new Exception("docIdAlreadyExists");
        }
        docRepository.save(doc);
    }

    @Caching(evict = {
            @CacheEvict(value="docById", key = "#doc.id"),
            @CacheEvict(value = "docsByType", allEntries = true)})
    public void updateDoc(Doc doc) {
        docRepository.save(doc);
    }

    @Caching(evict = {
            @CacheEvict(value="docById", key = "#id"),
            @CacheEvict(value = "docsByType", allEntries = true)})
    public void deleteDoc(String id) {
        docRepository.delete(id);
    }


    public boolean chapterIdAlreadyExists(String id) {
        return chapterRepository.findOne(id) != null;
    }

    @Cacheable(value = "chaptersByDoc", key = "#docId")
    public List<Chapter> chaptersByDoc(String docId) {
        return chapterRepository.findByDocId(docId);
    }

    @CacheEvict(value = "chaptersByDoc", key = "#chapter.docId")
    public void newChapter(Chapter chapter) throws Exception {
        if (chapterIdAlreadyExists(chapter.getId())) {
            throw new Exception("chapterIdAlreadyExists");
        }
        chapterRepository.save(chapter);
    }

    @CacheEvict(value = "chaptersByDoc", key = "#chapter.docId")
    public void updateChapter(Chapter chapter) {
        chapterRepository.save(chapter);
    }

    @CacheEvict(value = "chaptersByDoc", key = "#docId")
    public void deleteChapter(String id, String docId) {
        chapterRepository.delete(id);
    }

}
