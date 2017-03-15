import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Banner from './common/Banner'
import HomeEntry from './common/HomeEntry'
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
                            <p className="ever">本平台由公司各个架构组倾力打造，提供常用公共资源组件、公共服务、UI模板等，方便复用，旨在为各个项目组提高开发效率。</p>
                            <div className="welcome-grids">
                                {/*<HomeEntry  link="/modules"*/}
                                        {/*icon="tasks"*/}
                                        {/*title="公共组件"*/}
                                        {/*sub="提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件升级日志等。"/>*/}
                                {/*<HomeEntry  link="/services"*/}
                                        {/*icon="cloud"*/}
                                        {/*title="公共服务"*/}
                                        {/*sub="还在为发送短信等功能烦恼吗？快来试试公司公共微服务吧！点击查看详细API参考文档。"/>*/}
                                <HomeEntry  link="/ui/webSpecs"
                                        icon="picture"
                                        title="UI资源"
                                        sub="UI界面设计素材，公司统一UI风格，常用医疗行业小图标，公司产品风格统一化。"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3> 架构规范 </h3>
                            <p className="ever">公司推荐技术选型，编码规范，SQL规范，研发流程规范，运维流程制度规范。开发架构，研发运维不再烦恼！</p>
                            <div className="welcome-grids">
                                <HomeEntry  link="/tech/qs"
                                        icon="paperclip"
                                        title="技术架构"
                                        sub="公司推荐技术选型、推荐版本号。异常处理、日志等基础设施。一站式开发平台。"/>
                                <HomeEntry  link="/dev/cloud-dev"
                                        icon="tags"
                                        title="研发规范"
                                        sub="编码规范，多系统对接规范，研发流程。切实提高代码质量，项目质量。"/>
                                <HomeEntry  link="/ops/org"
                                        icon="wrench"
                                        title="运维机制"
                                        sub="运维工作内容标准化，流程制度规范化，平台工具标准化、自动化。轻轻松松搞运维。"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>学习地图</h3>
                            <p className="ever">如何成倍的提高自己的编码速度？公司推荐的技术如何入门？编码工作有哪些常见的坑？让我们一起来做学霸！</p>
                            <div className="welcome-grids">
                                <HomeEntry  link="/backend"
                                        icon="floppy-disk"
                                        title="后端技术"
                                        sub="玩转IDE的各种黑科技，spring系列全攻略，缓存的N种用法，优化SQL的正确姿势，进阶JAVA8。"/>
                                <HomeEntry  link="/frontend"
                                        icon="expand"
                                        title="前端技术"
                                        sub="从基础的CSS+Javascript，到SASS+React，浏览器开发者工具，前端技术一网打尽。"/>
                                <HomeEntry  link="/businessOverall/all"
                                        icon="briefcase"
                                        title="业务知识"
                                        sub="医疗行业有哪些细分市场？公司几十个项目组都在做什么？要想代码写的好，业务知识要学好。"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
}

