import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Java extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <div className="doc-content">
                        <h2>Java框架</h2>
                        <label>
                            <span>脚手架 - Spring Boot</span>
                            <p>
                                简化新Spring应用的初始搭建以及开发过程。
                                该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>MVC Web - Spring Boot Web</span>
                            <p>
                                简化新Spring应用的初始搭建以及开发过程。
                                该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &emsp;&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                    &emsp;&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;&#13;&#10;
                                    &emsp;&lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>ORM - 持久化框架</span>
                            <p>
                                Mybatis with spring-boot
                            </p>
                            <p>
                                <textarea readOnly="true" rows="10" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.2.0&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;mybatis&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;3.4.2&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                Spring Data Jpa with Hibernate
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                Hibernate
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.hibernate&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;5.2.7.Final&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>DB连接池</span>
                            <p>
                                c3p0
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                            &lt;groupId&gt;com.mchange&lt;/groupId&gt;&#13;&#10;
                                            &lt;artifactId&gt;c3p0&lt;/artifactId&gt;&#13;&#10;
                                            &lt;version&gt;0.9.5.2&lt;/version&gt;&#13;&#10;
                                        &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                druid
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;&#13;&#10;
                                            &lt;artifactId&gt;druid&lt;/artifactId&gt;&#13;&#10;
                                            &lt;version&gt;1.0.27&lt;/version&gt;&#13;&#10;
                                        &lt;/dependency&gt;"/>
                            </p>

                            <span>模板引擎</span>
                            <p>
                                thymeleaf
                            </p>
                            <p>
                                <textarea readOnly="true" rows="10" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.thymeleaf&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;thymeleaf&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;3.0.3.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                freemarker
                            </p>
                            <p>
                                <textarea readOnly="true" rows="10" cols="40"
                                          value="&lt;dependency&gt;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.freemarker&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;freemarker&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;2.3.23&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>缓存</span>
                            <p>
                                ehcache 本地缓存
                            </p>
                            <p>
                                <textarea readOnly="true" rows="11" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;net.sf.ehcache&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;ehcache&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;2.10.3&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                redis 集中缓存
                            </p>
                            <p>
                                <textarea readOnly="true" rows="11" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;redis.clients&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;jedis&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;2.9.0&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>微服务 - Spring Cloud</span>
                            <p>
                                简化新Spring应用的初始搭建以及开发过程。
                                该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-cloud-starter&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.1.7.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>权限框架</span>
                            <p>
                                Spring Security
                                spring-boot + spring-web
                            </p>
                            <p>
                                <textarea readOnly="true" rows="10" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-security-web&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;4.2.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>
                            <p>
                                Apache Shiro
                            </p>
                            <p>
                                <textarea readOnly="true" rows="10" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;shiro-core&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.3.2&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt&#13;&#10;;
                                        &lt;artifactId&gt;shiro-spring&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;1.3.2&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>定时任务 - Quartz</span>
                            <p>
                                Quartz with Spring
                            </p>
                            <p>
                                <textarea readOnly="true" rows="13" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                        &lt;groupId&gt;org.springframework&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-context-support&lt;/artifactId&gt; &#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt; &#13;&#10;
                                        &lt;groupId&gt;org.springframework&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;spring-tx&lt;/artifactId&gt; &#13;&#10;
                                    &lt;/dependency&gt;&#13;&#10;
                                    &lt;dependency&gt; &#13;&#10;
                                        &lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;&#13;&#10;
                                        &lt;artifactId&gt;quartz&lt;/artifactId&gt;&#13;&#10;
                                        &lt;version&gt;2.2.1&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>NIO框架 - Netty</span>
                            <p>
                                NIO通信。
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;io.netty&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;netty-all&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;4.1.8.Final&lt;/version&gt;&#13;&#10;
                                &lt;/dependency&gt;"/>
                            </p>

                            <span>搜索引擎 - Lucene</span>
                            <p>
                                Lucene
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;org.apache.lucene&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;lucene-core&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;6.4.1&lt;/version&gt;&#13;&#10;
                                &lt;/dependency&gt;"/>
                            </p>

                            <span>DDD框架 - Apache Isis</span>
                            <p>
                                DDD
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;org.apache.isis.core&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;isis-core-applib&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;1.13.2&lt;/version&gt;&#13;&#10;
                                &lt;/dependency&gt;"/>
                            </p>

                            <span>规则引擎 - Drools</span>
                            <p>
                                规则引擎
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;org.drools&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;drools-core&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;6.5.0.Final&lt;/version&gt;&#13;&#10;
                                &lt;/dependency&gt;"/>
                            </p>

                            <span>工作流 - Activiti</span>
                            <p>
                                工作流
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &lt;groupId&gt;org.activiti&lt;/groupId&gt;&#13;&#10;
                                    &lt;artifactId&gt;activiti-engine&lt;/artifactId&gt;&#13;&#10;
                                    &lt;version&gt;5.22.0&lt;/version&gt;&#13;&#10;
                                &lt;/dependency&gt;"/>
                            </p>

                            <span>ETL - kettle</span>
                            <p>
                                ETL 6.0
                            </p>
                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
