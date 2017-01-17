import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Services extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                公司公共服务API文档。通过HTTP为所有项目组提供公共服务。
                            </div>
                            <h3>内部服务</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="登录+权限管理"
                                        viewed="16"
                                        needed="3"/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="短信发送"
                                        viewed="16"
                                        needed="3"/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="邮件发送"
                                        viewed="16"
                                        needed="3"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>外部服务</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="语音对接"
                                        viewed="316"
                                        needed="2"/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="IM对接"
                                        viewed="33"
                                        needed="1"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="微信公众号对接"
                                        viewed="211"
                                        needed="3"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="OSS对接"
                                        viewed="16"
                                        needed="0"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="天气预报对接"
                                        viewed="331"
                                        needed="5"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};

