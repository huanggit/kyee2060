package com.kyee.openplatform.repositorys.api;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ApiMethodRepository extends MongoRepository<ApiMethod,String>{
    public List<ApiMethod> findByParentId(String parentId);
}
