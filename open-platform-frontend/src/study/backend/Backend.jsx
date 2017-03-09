import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../../common/Entry'
const {Content} = Layout;

export default class Backend extends Component {

    render() {
        return (
            <Layout>
                <Content>
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
                                        like="0"/>
                                <Entry  link="/java8/interface-default"
                                        icon="cog"
                                        title="Java8"
                                        like="0"/>
                                <Entry  link="/spring-boot/quick-start"
                                        icon="music"
                                        title="Spring Boot"
                                        like="0"/>
                                <Entry  link="/jpa/quick-start"
                                        icon="floppy-saved"
                                        title="Spring Jpa"
                                        like="0"/>
                                <Entry  link="/mybatis/quick-start"
                                        icon="log-in"
                                        title="MyBatis"
                                        like="0"/>
                                <Entry  link="/thymeleaf/quick-start"
                                        icon="leaf"
                                        title="Thymeleaf"
                                        like="0"/>
                                <Entry  link="/ehcache/quick-start"
                                        icon="repeat"
                                        title="EhCache缓存"
                                        like="0"/>
                                <Entry  link="/scheduled/quick-start"
                                        icon="calendar"
                                        title="定时任务"
                                        like="0"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};


