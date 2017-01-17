import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Backend extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                玩转IDE的各种黑科技，spring系列全攻略，缓存的N种用法，优化SQL的正确姿势，进阶JAVA8。
                            </div>
                            <h3>后端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="Java & Jdk"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="Idea"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="Eclipse"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="Spring Framework"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="send"
                                        title="Spring MVC"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="Spring Boot"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="home"
                                        title="Spring Cloud"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="Python"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Http & Tomcat"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Cache"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="MySql"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};


