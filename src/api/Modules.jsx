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
                                <div className="tips"> 简介 </div>
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
                                        viewed="648"
                                        needed="21"/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="对称加密"
                                        viewed="153"
                                        needed="3"/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="非对称加密"
                                        viewed="174"
                                        needed="1"/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="消息推送"
                                        viewed="437"
                                        needed="26"/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="后台分页组件"
                                        viewed="690"
                                        needed="35"/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="搜索组件"
                                        viewed="209"
                                        needed="12"/>
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
                                        viewed="11"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="验证组件"
                                        viewed="209"
                                        needed="12"/>
                                <Entry  link="/module/api"
                                        icon="home"
                                        title="验证码组件"
                                        viewed="164"
                                        needed="6"/>
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
                                        viewed="46"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="Android消息推送"
                                        viewed="31"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="cordova视频插件"
                                        viewed="12"
                                        needed="1"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="cordova通讯插件"
                                        viewed="29"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="cordova直播插件"
                                        viewed="30"
                                        needed="1"/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="Android消息推送"
                                        viewed="31"
                                        needed="2"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>业务组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="send"
                                        title="挂号组件"
                                        viewed="11"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="list-alt"
                                        title="疾病组件"
                                        viewed="209"
                                        needed="12"/>
                                <Entry  link="/module/api"
                                        icon="home"
                                        title="体温表组件"
                                        viewed="164"
                                        needed="6"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};

