package com.kyee.openplatform.repositorys.doc;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChapterRepository extends MongoRepository<Chapter,String>{
    List<Chapter> findByDocId(String docId);
}
