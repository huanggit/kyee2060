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
                                公司公共服务API文档。通过HTTP为所有项目组提供公共服务。
                            </div>
                            <h3>内部服务</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="登录+权限管理"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="短信发送"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="file"
                                        title="邮件发送"
                                        sub=""/>
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
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="IM对接"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="微信公众号对接"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="OSS对接"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="天气预报对接"
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

