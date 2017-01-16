import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Banner from './common/Banner'
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
                                <div className="col-md-4 welcome-grid">
                                    <Link to={"/modules"}>
                                        <div className="welcome-grd">
                                            <div className="icons">
                                                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                                            </div>
                                            <h4>公共组件</h4>
                                            <p> 在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        </div>
                                        <h4>公共服务</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-file" aria-hidden="true"> </span>
                                        </div>
                                        <h4>样本模板</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3> 架构规范 </h3>
                            <p className="ever">本平台提供常用公共资源组件等，方便复用，提高效率</p>
                            <div className="welcome-grids">
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-send" aria-hidden="true"></span>
                                        </div>
                                        <h4> 架构技术 </h4>
                                        <p> 在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                        </div>
                                        <h4>研发规范</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                                        </div>
                                        <h4>运营机制</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>

                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>学习地图</h3>
                            <p className="ever">本平台提供常用公共资源组件等，方便复用，提高效率</p>
                            <div className="welcome-grids">
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-fire" aria-hidden="true"></span>
                                        </div>
                                        <h4>后端技术</h4>
                                        <p> 在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
                                        </div>
                                        <h4>前端技术</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>
                                <div className="col-md-4 welcome-grid">
                                    <div className="welcome-grd">
                                        <div className="icons">
                                            <span className="glyphicon glyphicon-filter" aria-hidden="true"></span>
                                        </div>
                                        <h4>业务知识</h4>
                                        <p>在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                                    </div>
                                </div>

                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
}

