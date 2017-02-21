package com.kyee.openplatform.service;

import com.kyee.openplatform.repositorys.count.Needed;
import com.kyee.openplatform.repositorys.count.NeededRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountService {

    @Autowired
    NeededRepository neededRepository;

    public void needComponent(String employeeId, String componentId) {
        String id = employeeId + componentId;
        neededRepository.save(new Needed(id, employeeId, componentId));
    }
}
