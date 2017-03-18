import React, {Component} from "react";
import { Link } from 'react-router';
import Entry from '../../common/Entry'
import EntryList from "../../common/EntryList";

export default class Backend extends EntryList {

    render() {
        var t = this;
        var likes = this.state.likesByTitle;
        return (
            <div>
                <div>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                玩转IDE的各种黑科技，spring系列全攻略，缓存的N种用法，优化SQL的正确姿势，进阶JAVA8。
                            </div>
                            <h3>后端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/basic/speed"
                                        icon="bold"
                                        title="基础技能"
                                        like={t.dis(likes.basic)}/>
                                <Entry  link="/java8/interface-default"
                                        icon="cog"
                                        title="Java8"
                                        like={t.dis(likes.java8)}/>
                                <Entry  link="/springMvc/mapping"
                                        icon="hd-video"
                                        title="Spring MVC"
                                        like={t.dis(likes.springMvc)}/>
                                <Entry  link="/springBoot/quick-start"
                                        icon="music"
                                        title="Spring Boot"
                                        like={t.dis(likes.springBoot)}/>
                                <Entry  link="/jpa/quick-start"
                                        icon="floppy-saved"
                                        title="Spring Jpa"
                                        like={t.dis(likes.jpa)}/>
                                <Entry  link="/mybatis/quick-start"
                                        icon="log-in"
                                        title="MyBatis"
                                        like={t.dis(likes.mybatis)}/>
                                <Entry  link="/thymeleaf/quick-start"
                                        icon="leaf"
                                        title="Thymeleaf"
                                        like={t.dis(likes.thymeleaf)}/>
                                <Entry  link="/ehcache/quick-start"
                                        icon="repeat"
                                        title="EhCache缓存"
                                        like={t.dis(likes.ehcache)}/>
                                <Entry  link="/scheduled/quick-start"
                                        icon="calendar"
                                        title="定时任务"
                                        like={t.dis(likes.scheduled)}/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};


