
今天我们先来介绍shiro的基本概念

一、shiro功能介绍
shiro
Authentication：身份认证/登录
Authorization：验证权限，即，验证某个人是否有做某件事的权限。
Session Management:会话管理。管理用户特定的会话，支持web,非web,ejb。
Cryptography: 加密，保证数据安全。
其他特性。
Web Support:web支持，更容易继承web应用。
Caching：缓存
Concurrency ：多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；
Testing：提供测试支持。
Run As：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；
Remember Me：记住我，即记住登录状态，一次登录后，下次再来的话不用登录了 。
二、架构介绍
从最顶层看shiro,有三个最基本概念 ： Subject, SecurityManager 和Realms。 

Subject：主体。抽象概念，代表了当前“用户”，这个用户不一定是一个具体的人，与当前应用交互的任何东西都是Subject，如网络爬虫，机器人等。
SecurityManager：安全管理器。shiro的核心， 所有与安全有关的操作都会与SecurityManager交互；且它管理着所有Subject。
Realms： shiro和应用程序的权限数据之间的桥梁，为shiro提供安全数据。 SecurityManager要验证用户身份，那么它需要从Realm获取相应的用户进行比较以确定用户身份是否合法；
也需要从Realm得到用户相应的角色/权限进行验证用户是否能进行操作；可以把Realm看成DataSource，即安全数据源。

Subject (org.apache.shiro.subject.Subject) 
    与应用交互的主体，例如用户，第三方应用等。
SecurityManager (org.apache.shiro.mgt.SecurityManager)
    SecurityManager是shiro的核心，负责整合所有的组件，使他们能够方便快捷完成某项功能。例如：身份验证，权限验证等。
Authenticator (org.apache.shiro.authc.Authenticator)
     认证器，负责主体认证的，这是一个扩展点，如果用户觉得Shiro默认的不好，可以自定义实现；其需要认证策略（Authentication Strategy），即什么情况下算用户认证通过了。
Authorizer (org.apache.shiro.authz.Authorizer)
      来决定主体是否有权限进行相应的操作；即控制着用户能访问应用中的哪些功能。
SessionManager (org.apache.shiro.session.mgt.SessionManager) 
     会话管理。
SessionDAO (org.apache.shiro.session.mgt.eis.SessionDAO) 
  数据访问对象，对session进行CRUD。
CacheManager (org.apache.shiro.cache.CacheManager)
     缓存管理器。创建和管理缓存，为 authentication, authorization 和 session management 提供缓存数据，避免直接访问数据库，提高效率。
Cryptography (org.apache.shiro.crypto.*)
     密码模块，提供加密组件。
Realms (org.apache.shiro.realm.Realm)
      可以有1个或多个Realm，可以认为是安全实体数据源，即用于获取安全实体的；可以是JDBC实现，也可以是LDAP实现，或者内存实现等等；由用户提 供；注意：Shiro不知道你的用户/权限存储在哪及以何种格式存储；所以我们一般在应用中都需要实现自己的Realm。