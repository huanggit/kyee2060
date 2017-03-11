package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.like.Like;
import com.kyee.openplatform.repositorys.like.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    public Boolean isLike(String userId, String title) {
        return null != likeRepository.findOne(compositeId(userId, title));
    }

    public void toggleike(String userId, String title) {
        String id = compositeId(userId, title);
        if (isLike(userId, title)) {
            likeRepository.delete(id);
        }else {
            likeRepository.save(new Like(id, userId, title));
        }
    }

    private String compositeId(String userId, String title) {
        return userId + title;
    }
}
