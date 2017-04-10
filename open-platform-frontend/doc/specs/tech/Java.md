Java框架
===
> 所有的spring boot starter都统一使用1.5.X.RELEASE的最新版本。

### 脚手架 - Spring Boot
> 简化新Spring应用的初始搭建以及开发过程。该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
</dependency>
```

***
### MVC Web - Spring Boot Web
> 快速搭建java web项目
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

***
### ORM - 持久化框架
> Mybatis with spring-boot
```xml
<dependency>
  <groupId>org.mybatis.spring.boot</groupId>
  <artifactId>mybatis-spring-boot-starter</artifactId>
  <version>1.2.0</version>
</dependency>
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>3.4.2</version>
</dependency>
```
> Spring Data Jpa with Hibernate
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```
> Hibernate
```xml
<dependency>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-core</artifactId>
  <version>5.2.7.Final</version>
</dependency>
```

***
### DB连接池
> c3p0
```xml
<dependency>
  <groupId>com.mchange</groupId>
  <artifactId>c3p0</artifactId>
  <version>0.9.5.2</version>
</dependency>
```
> druid
```xml
<dependency>
  <groupId>com.alibaba</groupId>
  <artifactId>druid</artifactId>
  <version>1.0.27</version>
</dependency>
```

***
### 模板引擎
> thymeleaf
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
  <groupId>org.thymeleaf</groupId>
  <artifactId>thymeleaf</artifactId>
  <version>3.0.3.RELEASE</version>
</dependency>
```
> freemarker
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-freemarker</artifactId>
</dependency>
<dependency>
  <groupId>org.freemarker</groupId>
  <artifactId>freemarker</artifactId>
  <version>2.3.23</version>
</dependency>
```

***
### 缓存
> ehcache 本地缓存
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
<dependency>
  <groupId>net.sf.ehcache</groupId>
  <artifactId>ehcache</artifactId>
  <version>2.10.3</version>
</dependency>
```
> redis 集中缓存
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
  <groupId>redis.clients</groupId>
  <artifactId>jedis</artifactId>
  <version>2.9.0</version>
</dependency>
```

***
### 微服务 - Spring Cloud
> 微服务框架
```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter</artifactId>
  <version>1.1.7.RELEASE</version>
</dependency>
```


***
### 权限框架
> Spring Security
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-core</artifactId>
  <version>4.2.1.RELEASE</version>
</dependency>
```
> Apache Shiro
```xml
<dependency>
  <groupId>org.apache.shiro</groupId>
  <artifactId>shiro-core</artifactId>
  <version>1.3.2</version>
</dependency>
<dependency>
  <groupId>org.apache.shiro</groupId>
  <artifactId>shiro-spring</artifactId>
  <version>1.3.2</version>
</dependency>
```

***
### 定时任务 - Quartz
> spring-boot自带@EnableScheduling和@Scheduled注解，可以快速开发定时任务，也可以单独使用quartz。
```xml
<dependency>
  <groupId>org.quartz-scheduler</groupId>
  <artifactId>quartz</artifactId>
  <version>2.2.1</version>
</dependency>
```


***
### NIO框架 - Netty
> NIO通信。
```xml
<dependency>
  <groupId>io.netty</groupId>
  <artifactId>netty-all</artifactId>
  <version>4.1.8.Final</version>
</dependency>
```

***
### 搜索引擎 - Lucene
> Lucene。
```xml
<dependency>
  <groupId>org.apache.lucene</groupId>
  <artifactId>lucene-core</artifactId>
  <version>6.4.1</version>
</dependency>
```

***
### DDD框架 - Apache Isis
> 领域驱动设计。
```xml
<dependency>
  <groupId>org.apache.isis.core</groupId>
  <artifactId>isis-core-applib</artifactId>
  <version>1.14.0</version>
</dependency>
```

***
### 规则引擎 - Drools
> 规则引擎。
```xml
<dependency>
  <groupId>org.drools</groupId>
  <artifactId>drools-core</artifactId>
  <version>6.5.0.Final</version>
</dependency>
```

***
### 工作流 - Activiti
> 工作流。
```xml
<dependency>
  <groupId>org.activiti</groupId>
  <artifactId>activiti-engine</artifactId>
  <version>5.22.0</version>
</dependency>
```

***
### ETL - kettle
> ETL 6.0。