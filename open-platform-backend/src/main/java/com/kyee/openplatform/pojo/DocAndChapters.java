package com.kyee.openplatform.pojo;


import com.kyee.openplatform.repositorys.doc.Chapter;
import com.kyee.openplatform.repositorys.doc.Doc;
import lombok.Data;

import java.util.List;

@Data
public class DocAndChapters {
    private Doc doc;
    private List<Chapter> chapters;
}
