快速开始
===
                Spring Boot作为新一代的Spring脚手架，直接根据pom文件中的依赖和配置文件中的参数自动配置bean。
                免去了Spring需要再次配置xml文件创建bean的重复劳动。有了Spring Boot，搭建一个简单的web项目只需要2个文件，十分简单方便。

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
                \t<java.version>1.8</java.version>
                \t<spring-boot.version>1.5.1.RELEASE</spring-boot.version>
                \t<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
                </properties>
                 
                <dependencyManagement>
                \t<dependencies>
                \t\t<dependency>
                \t\t\t<groupId>org.springframework.boot</groupId>
                \t\t\t<artifactId>spring-boot-dependencies</artifactId>
                \t\t\t<version>${spring-boot.version}</version>
                \t\t\t<type>pom</type>
                \t\t\t<scope>import</scope>
                \t\t</dependency>
                \t</dependencies>
                </dependencyManagement>
                 
                <dependencies>
                \t<dependency>
                \t\t<groupId>org.springframework.boot</groupId>
                \t\t<artifactId>spring-boot-starter-web</artifactId>
                \t</dependency>
                </dependencies>
                 
                <build>
                \t<plugins>
                \t\t<plugin>
                \t\t\t<groupId>org.springframework.boot</groupId>
                \t\t\t<artifactId>spring-boot-maven-plugin</artifactId>
                \t\t\t<version>${spring-boot.version}</version>
                \t\t</plugin>
                \t</plugins>
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
                 
                @Controller
                @EnableAutoConfiguration
                public class App {
                 
                    @RequestMapping("/")
                    @ResponseBody
                    String home() {
                        return "Quick Start!";
                    }
                 
                    public static void main(String[] args) throws Exception {
                        SpringApplication.run(App.class, args);
                    }
                }
                ```

                ***
                ### 运行，访问
                最后回到项目根目录，运行：`mvn spring-boot:run`。
                在浏览器里访问`http://localhost:8080`。