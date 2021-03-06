快速开始
===
Thymeleaf作为主流模板引擎之一，在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在
服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 html 标签里增加额外的属性来达到模板+数据的展示方式。浏览器解释
html 时会忽略未定义的标签属性，所以 thymeleaf 的模板可以静态地运行；当有数据返回到页面时，Thymeleaf 标签会动态地替换掉静态内容，使页面动态显示。

***
### maven依赖
先在项目根目录下建立文件`pom.xml`。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<groupId>com.kyee</groupId>
<artifactId>quick-start</artifactId>
<version>0.0.1-SNAPSHOT</version>
<packaging>jar</packaging>

<properties>
  <java.version>1.8</java.version>
  <spring-boot.version>1.5.1.RELEASE</spring-boot.version>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>${spring-boot.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>
</dependencies>

<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <version>${spring-boot.version}</version>
    </plugin>
  </plugins>
</build>
</project>
```

***
### java代码
项目根目录下建立文件夹：`src/main/java/com/kyee/quickstart`，然后在该文件夹下建立java文件`App.java`：
```java
package com.kyee.quickstart;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;;

@Controller
@EnableAutoConfiguration
public class App {

   @RequestMapping("/")
   String greeting(@RequestParam(value="name", required=false, defaultValue="Quick Start") String name, Model model) {
       model.addAttribute("name", name);
       return "greeting";
   }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }
}
```

***
### html代码
项目根目录下建立文件夹：`src/main/resources/templates`，然后在该文件夹下建立html文件`greeting.html`：
```html
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
   <p th:text="\Hello, \ + ${name} " />
</body>
</html>
```

***
### 运行，访问
最后回到项目根目录，运行：`mvn spring-boot:run`。
在浏览器里访问`http://localhost:8080`。