Java框架
===

### 脚手架 - Spring Boot
> 简化新Spring应用的初始搭建以及开发过程。该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
```

***
### MVC Web - Spring Boot Web
> 快速搭建java web项目
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-web</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
```

***
### ORM - 持久化框架
> Mybatis with spring-boot
```xml
<dependency>
\t<groupId>org.mybatis.spring.boot</groupId>
\t<artifactId>mybatis-spring-boot-starter</artifactId>
\t<version>1.2.0</version>
</dependency>
<dependency>
\t<groupId>org.mybatis</groupId>
\t<artifactId>mybatis</artifactId>
\t<version>3.4.2</version>
</dependency>
```
> Spring Data Jpa with Hibernate
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-data-jpa</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
```
> Hibernate
```xml
<dependency>
\t<groupId>org.hibernate</groupId>
\t<artifactId>hibernate-core</artifactId>
\t<version>5.2.7.Final</version>
</dependency>
```

***
### DB连接池
> c3p0
```xml
<dependency>
\t<groupId>com.mchange</groupId>
\t<artifactId>c3p0</artifactId>
\t<version>0.9.5.2</version>
</dependency>
```
> druid
```xml
<dependency>
\t<groupId>com.alibaba</groupId>
\t<artifactId>druid</artifactId>
\t<version>1.0.27</version>
</dependency>
```

***
### 模板引擎
> thymeleaf
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-thymeleaf</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
<dependency>
\t<groupId>org.thymeleaf</groupId>
\t<artifactId>thymeleaf</artifactId>
\t<version>3.0.3.RELEASE</version>
</dependency>
```
> freemarker
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-freemarker</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
<dependency>
\t<groupId>org.freemarker</groupId>
\t<artifactId>freemarker</artifactId>
\t<version>2.3.23</version>
</dependency>
```

***
### 缓存
> ehcache 本地缓存
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-cache</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
<dependency>
\t<groupId>net.sf.ehcache</groupId>
\t<artifactId>ehcache</artifactId>
\t<version>2.10.3</version>
</dependency>
```
> redis 集中缓存
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-data-redis</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
<dependency>
\t<groupId>redis.clients</groupId>
\t<artifactId>jedis</artifactId>
\t<version>2.9.0</version>
</dependency>
```

***
### 微服务 - Spring Cloud
> 微服务框架
```xml
<dependency>
\t<groupId>org.springframework.cloud</groupId>
\t<artifactId>spring-cloud-starter</artifactId>
\t<version>1.1.7.RELEASE</version>
</dependency>
```


***
### 权限框架
> Spring Security
```xml
<dependency>
\t<groupId>org.springframework.boot</groupId>
\t<artifactId>spring-boot-starter-security</artifactId>
\t<version>1.5.1.RELEASE</version>
</dependency>
<dependency>
\t<groupId>org.springframework.security</groupId>
\t<artifactId>spring-security-core</artifactId>
\t<version>4.2.1.RELEASE</version>
</dependency>
```
> Apache Shiro
```xml
<dependency>
\t<groupId>org.apache.shiro</groupId>
\t<artifactId>shiro-core</artifactId>
\t<version>1.3.2</version>
</dependency>
<dependency>
\t<groupId>org.apache.shiro</groupId>
\t<artifactId>shiro-spring</artifactId>
\t<version>1.3.2</version>
</dependency>
```

***
### 定时任务 - Quartz
> spring-boot自带@EnableScheduling和@Scheduled注解，可以快速开发定时任务，也可以单独使用quartz。
```xml
<dependency>
\t<groupId>org.quartz-scheduler</groupId>
\t<artifactId>quartz</artifactId>
\t<version>2.2.1</version>
</dependency>
```


***
### NIO框架 - Netty
> NIO通信。
```xml
<dependency>
\t<groupId>io.netty</groupId>
\t<artifactId>netty-all</artifactId>
\t<version>4.1.8.Final</version>
</dependency>
```

***
### 搜索引擎 - Lucene
> Lucene。
```xml
<dependency>
\t<groupId>org.apache.lucene</groupId>
\t<artifactId>lucene-core</artifactId>
\t<version>6.4.1</version>
</dependency>
```

***
### DDD框架 - Apache Isis
> 领域驱动设计。
```xml
<dependency>
\t<groupId>org.apache.isis.core</groupId>
\t<artifactId>isis-core-applib</artifactId>
\t<version>1.14.0</version>
</dependency>
```

***
### 规则引擎 - Drools
> 规则引擎。
```xml
<dependency>
\t<groupId>org.drools</groupId>
\t<artifactId>drools-core</artifactId>
\t<version>6.5.0.Final</version>
</dependency>
```

***
### 工作流 - Activiti
> 工作流。
```xml
<dependency>
\t<groupId>org.activiti</groupId>
\t<artifactId>activiti-engine</artifactId>
\t<version>5.22.0</version>
</dependency>
```

***
### ETL - kettle
> ETL 6.0。