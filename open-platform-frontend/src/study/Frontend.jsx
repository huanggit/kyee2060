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
                                <div className="tips"> 简介 </div>
                                从基础的CSS+Javascript，到SASS+React，浏览器开发者工具，前端技术一网打尽。
                            </div>
                            <h3>前端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="浏览器开发工具"
                                        viewed="26"
                                        needed="4"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="JavaScript"
                                        viewed="16"
                                        needed="33"/>
                                <Entry  link="/module/api"
                                        icon="globe"
                                        title="HTML"
                                        viewed="44"
                                        needed="31"/>
                                <Entry  link="/module/api"
                                        icon="user"
                                        title="CSS"
                                        viewed="146"
                                        needed="33"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="Bootstrap"
                                        viewed="198"
                                        needed="33"/>
                                <Entry  link="/module/api"
                                        icon="filter"
                                        title="jQuery"
                                        viewed="222"
                                        needed="23"/>
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="AngularJS"
                                        viewed="33"
                                        needed="11"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="React"
                                        viewed="46"
                                        needed="4"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};

