package com.kyee.openplatform.repositorys.api;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ApiParamRepository extends MongoRepository<ApiParam, String>{
    public List<ApiParam> findByParentId(String parentId);
}
