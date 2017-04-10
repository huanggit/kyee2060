快速开始
===

EhCache是十分流行的内存缓存框架，配合Spring Boot可以通过注解轻松使用其来缓存一些访问量比较大，又不常更新的数据，提高系统性能。

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
  <maven.compiler.source>${java.version}</maven.compiler.source>
  <maven.compiler.target>${java.version}</maven.compiler.target>
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
    <artifactId>spring-boot-starter</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
  </dependency>
  <dependency>
    <groupId>net.sf.ehcache</groupId>
    <artifactId>ehcache</artifactId>
    <version>2.10.3</version>
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
项目根目录下建立文件夹：`src/main/java/com/kyee/quickstart/service`，
然后在该文件夹下建立java文件`CacheService.java`。
```java
package com.kyee.quickstart.service;
 
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
 
@Service
public class CacheService {
 
   @Cacheable("data")
   public String getData(String key){
       System.out.println("actually did service.");
       return "back-" + key;
   }
}
```
在文件夹`src/main/java/com/kyee/quickstart`下建立java文件`App.java`：
```java
package com.kyee.quickstart;
 
import com.kyee.quickstart.service.CacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
 
@EnableCaching
@SpringBootApplication
public class App implements CommandLineRunner{
 
   @Autowired
   CacheService cacheService;
 
   public static void main(String[] args) throws Exception {
       SpringApplication.run(App.class, args);
   }
 
   @Override
   public void run(String... strings) throws Exception {
       System.out.println("call service first:"+cacheService.getData("data"));
       System.out.println("call service second:"+cacheService.getData("data"));
   }
}
```

***
### 运行，访问
最后回到项目根目录，运行：`mvn spring-boot:run`。得到打印结果：
```
 actually did service.
 call service first:back-data
 call service second:back-data
```
可以发现，service只被调用了一次，第二次直接从缓存里取了数据。
