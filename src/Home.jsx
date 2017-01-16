import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Banner from './common/Banner'
import Entry from './common/Entry'
const {Content} = Layout;


export default  class Home extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Banner/>
                    <div className="welcome">
                        <div className="container">
                            <h3> 公共资源 </h3>
                            <p className="ever">本平台提供常用公共资源组件等，方便复用，提高效率</p>
                            <div className="welcome-grids">
                                <Entry  link="/modules"
                                        icon="cog"
                                        title="公共组件"
                                        sub="在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件升级日志等。"/>
                                <Entry  link="/services"
                                        icon="user"
                                        title="公共服务"
                                        sub="在这里提供详细的微服务使用文档，包括微服务简介、微服务详细API参考文档、升级日志等。"/>
                                <Entry  link="/uis"
                                        icon="file"
                                        title="UI模板"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3> 架构规范 </h3>
                            <p className="ever">本平台提供常用公共资源组件等，方便复用，提高效率</p>
                            <div className="welcome-grids">
                                <Entry  link="/tech"
                                        icon="send"
                                        title="技术架构"
                                        sub=""/>
                                <Entry  link="/tech"
                                        icon="list-alt"
                                        title="研发规范"
                                        sub=""/>
                                <Entry  link="/tech"
                                        icon="home"
                                        title="运营机制"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>学习地图</h3>
                            <p className="ever">本平台提供常用公共资源组件等，方便复用，提高效率</p>
                            <div className="welcome-grids">
                                <Entry  link="/backend"
                                        icon="fire"
                                        title="后端技术"
                                        sub=""/>
                                <Entry  link="/frontend"
                                        icon="globe"
                                        title="前端技术"
                                        sub=""/>
                                <Entry  link="/business"
                                        icon="filter"
                                        title="业务知识"
                                        sub=""/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
}

