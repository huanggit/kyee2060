package com.kyee.openplatform.repositorys.apiservice;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApiServiceRepository extends MongoRepository<ApiService, String> {
}
