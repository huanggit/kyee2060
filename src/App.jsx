import React, {Component} from "react"
import { Link } from 'react-router';
import {Layout} from 'antd'
const {Header, Footer} = Layout;



export default class App extends Component {

    render() {
        return (
            <Layout>
                <Header>
                    <div className="header">
                        <div className="container">
                            <div className="header-nav">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <div className="logo">
                                            <i></i>
                                            <span>开放学习平台</span>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li className="hvr-sweep-to-bottom active"><Link to={"/modules"}>公共组件</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/services"} class="scroll">公共服务</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/uis"} class="scroll">UI模板</Link> </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Header>

                {this.props.children}

                <Footer>
                    <div className="footer">
                        <div className="container">
                            <div className="footer-grids">
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">公共资源</h3>
                                    <ul>
                                        <li><a href="">公共组件</a></li>
                                        <li><a href="">公共服务</a></li>
                                        <li><a href="">样本模板</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">架构规范</h3>
                                    <ul>
                                        <li><a href="">技术架构</a></li>
                                        <li><a href="">编码规范</a></li>
                                        <li><a href="">运营机构</a></li>
                                        <li><a href="">开发流程</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">技术学习</h3>
                                    <ul>
                                        <li><a href="">JAVA</a></li>
                                        <li><a href=""> 前端 </a></li>
                                        <li><a href=""> 产品</a></li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy">
                        <div className="container">
                            <div className="copy-left">
                                <p>Copyright © 2015技术支持：上海京颐科技股份有限公司</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </Footer>
            </Layout>
        )
    }
}
