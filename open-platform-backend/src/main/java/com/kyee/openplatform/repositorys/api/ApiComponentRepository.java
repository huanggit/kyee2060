package com.kyee.openplatform.repositorys.api;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ApiComponentRepository extends MongoRepository<ApiComponent, String> {
    public List<ApiComponent> findByClazz(String clazz);
}
