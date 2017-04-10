快速开始
===
MyBatis 作为一个轻量级的ORM框架，可以把每个SQL接口化，同时提供了POJO类映射，关键词转义等功能。

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
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  <dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>1.1.1</version>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>6.0.4</version>
  </dependency>
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.12</version>
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
### yml配置文件
项目根目录下建立文件夹：`src/main/resources/config`，然后在该文件夹下建立配置文件`application.yml`。
**（请将数据库连接修改成自己实际的配置）**
```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db?useLegacyDatetimeCode=false&serverTimezone=CST&useSSL=false&autoReconnect=true
    username: xxxx
    password: xxxxxx
    driver-class-name: com.mysql.cj.jdbc.Driver
    max-wait: 1
    max-active: 10
  jpa:
    database: MYSQL
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
```

***
### java代码
项目根目录下建立文件夹：`src/main/java/com/kyee/quickstart/repository/user`， 
然后在该文件夹下建立java文件`UserInfo.java`（请根据**UserInfo**在数据库里建立相应的表）。
```java
package com.kyee.quickstart.repository.user;
import lombok.*;
import javax.persistence.*;

@Entity
@Data
@Table(name = "user_info")
public class UserInfo {
   @Id
   @GeneratedValue(strategy= GenerationType.AUTO)
   private Long id; //用户编号
   private String name; //用户名称
}
```
再在该文件夹下建立java文件`UserInfoRepository.java`
```java
package com.kyee.quickstart.repository.user;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
 
public interface UserInfoRepository extends CrudRepository<UserInfo,Long>{
   @Query(value = "SELECT count(1) FROM user_info WHERE name=?1", nativeQuery = true)
   int countByName(String name);
}
```
在文件夹`src/main/java/com/kyee/quickstart`下建立java文件`App.java`：
```java
package com.kyee.quickstart;
 
import com.kyee.quickstart.repository.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
 
@SpringBootApplication
public class App implements CommandLineRunner{
   @Autowired
   UserInfoRepository userInfoRepository;
 
   public static void main(String[] args) throws Exception {
       SpringApplication.run(App.class, args);
   }
 
   @Override
   public void run(String... strings) throws Exception {
       UserInfo info = new UserInfo();
       info.setId(1l);
       info.setName("黄XX");
       userInfoRepository.save(info);
       System.out.println(userInfoRepository.countByName("黄XX"));
   }
}
```

***
### 运行，访问
最后回到项目根目录，运行：`mvn spring-boot:run`。得到打印结果：1