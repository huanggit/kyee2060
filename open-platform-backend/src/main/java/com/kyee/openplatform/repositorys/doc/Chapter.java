package com.kyee.openplatform.repositorys.doc;

import lombok.Data;

@Data
public class Chapter {

    private String id;
    private String docId;
    private String name;
    private String content;
    private String lastUpdater;
}
