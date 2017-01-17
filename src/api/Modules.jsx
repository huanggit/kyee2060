import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Modules extends Component {


    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                公司公共组件库API文档。
                                公司maven私服地址：http://115.28.172.54:8081。
                                公司git地址：http://192.168.1.11/git。
                            </div>
                            <h3>后端组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="权限管理"
                                        sub=""/>

                                <Entry  link="/module/api"
                                        icon="user"
                                        title="对称加密"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="非对称加密"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="消息推送"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="后台分页组件"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>前端组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="send"
                                        title="网页视频"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="验证组件"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="home"
                                        title="验证码组件"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>APP组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="IOS消息推送"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="Android消息推送"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="cordova视频插件"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="cordova通讯插件"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="cordova直播插件"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="Android消息推送"
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

