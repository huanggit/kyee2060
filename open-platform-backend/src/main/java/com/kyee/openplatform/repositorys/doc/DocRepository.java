package com.kyee.openplatform.repositorys.doc;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface DocRepository extends MongoRepository<Doc, String> {
    List<Doc> findByType(String type);
}
