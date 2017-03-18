package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.like.Like;
import com.kyee.openplatform.repositorys.like.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import java.util.Map;

import static java.util.stream.Collectors.counting;
import static java.util.stream.Collectors.groupingBy;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    @Cacheable("isLike")
    public Boolean isLike(String userId, String title) {
        return null != likeRepository.findOne(compositeId(userId, title));
    }

    @Caching(evict = {
            @CacheEvict(value="isLike"),
            @CacheEvict(value="getLikesGroupingByTitle", allEntries = true)})
    public void toggleLike(String userId, String title) {
        String id = compositeId(userId, title);
        if (isLike(userId, title)) {
            likeRepository.delete(id);
        }else {
            likeRepository.save(new Like(id, userId, title));
        }
    }

    @Cacheable("getLikesGroupingByTitle")
    public Map<String, Long> getLikesGroupingByTitle(){
        return likeRepository.findAll().stream()
                .collect(groupingBy(Like::getTitle, counting()));
    }

    private String compositeId(String userId, String title) {
        return userId + title;
    }
}
