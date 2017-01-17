import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Frontend extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                从基础的CSS+Javascript，到SASS+React，浏览器开发者工具，前端技术一网打尽。
                            </div>
                            <h3>前端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="浏览器开发工具"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="JavaScript"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="HTML"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="CSS"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Bootstrap"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="jQuery"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="AngularJS"
                                        sub=""/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="React"
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

