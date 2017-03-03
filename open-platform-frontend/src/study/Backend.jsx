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
                                <div className="tips"> 简介 </div>
                                玩转IDE的各种黑科技，spring系列全攻略，缓存的N种用法，优化SQL的正确姿势，进阶JAVA8。
                            </div>
                            <h3>后端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/java8/interface-default"
                                        icon="cog"
                                        title="Java8"
                                        viewed="367"
                                        needed="45"/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="Spring Framework"
                                        viewed="146"
                                        needed="31"/>
                                <Entry  link="/module/api"
                                        icon="send"
                                        title="Spring MVC"
                                        viewed="226"
                                        needed="22"/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="Spring Boot"
                                        viewed="643"
                                        needed="31"/>
                                <Entry  link="/module/api"
                                        icon="home"
                                        title="Spring Cloud"
                                        viewed="16"
                                        needed="3"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Http & Tomcat"
                                        viewed="886"
                                        needed="63"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Cache"
                                        viewed="416"
                                        needed="55"/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="MySql"
                                        viewed="876"
                                        needed="47"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};


