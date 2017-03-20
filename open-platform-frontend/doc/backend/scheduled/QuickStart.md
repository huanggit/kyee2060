快速开始
===
    
    Spring Boot自带定时任务功能，只需一个注解即可完成定时任务功能。

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
    \t<maven.compiler.source>${java.version}</maven.compiler.source>
    \t<maven.compiler.target>${java.version}</maven.compiler.target>
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
    \t\t<artifactId>spring-boot-starter</artifactId>
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
    项目根目录下建立文件夹：`src/main/java/com/kyee/quickstart/`，在该目录下建立java文件`App.java`：
    ```java
    package com.kyee.quickstart;
     
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.scheduling.annotation.EnableScheduling;
    import org.springframework.scheduling.annotation.Scheduled;
     
    @SpringBootApplication
    @EnableScheduling
    public class App {
       @Scheduled(cron = "*/10 * * * * *")
       public void cron() {
           System.out.println("every 10 sec by cron");
       }
     
       @Scheduled(fixedDelay = 5000)
       public void fixedDelay() {
           System.out.println("every 5 sec by fixedDelay");
       }
     
       @Scheduled(fixedRate = 2000)
       public void fixedRate() {
           System.out.println("every 2 sec by fixedRate");
       }
     
       public static void main(String[] args) throws Exception {
           SpringApplication.run(App.class);
       }
    }
    ```

    ***
    ### 运行，访问
    最后回到项目根目录，运行：`mvn spring-boot:run`。可以看到周期性的输出结果。