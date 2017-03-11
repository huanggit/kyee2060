package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.like.Like;
import com.kyee.openplatform.repositorys.like.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

import static java.util.stream.Collectors.*;

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

    public Map<String, Long> getLikesGroupingByTitle(){
        return likeRepository.findAll().stream()
                .collect(groupingBy(Like::getTitle, counting()));
    }

    private String compositeId(String userId, String title) {
        return userId + title;
    }
}
