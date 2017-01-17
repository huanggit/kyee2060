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
                                            <Link to="/"><i></i><span>开放学习平台</span></Link>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li className="hvr-sweep-to-bottom active"><Link to={"/modules"}>公共资源</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/tech"} class="scroll">架构规范</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/backend"} class="scroll">学习地图</Link> </li>
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
                                        <li><Link to="/modules">公共组件</Link></li>
                                        <li><Link to="/services">公共服务</Link></li>
                                        <li><Link to="/uis">UI模板</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">架构规范</h3>
                                    <ul>
                                        <li><Link to="/tech">技术架构</Link></li>
                                        <li><Link to="/dev">研发规范</Link></li>
                                        <li><Link to="/ops">运营机制</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">学习地图</h3>
                                    <ul>
                                        <li><Link to="/backend">后端技术</Link></li>
                                        <li><Link to="/frontend">前端技术</Link></li>
                                        <li><Link to="/business">业务知识</Link></li>
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
