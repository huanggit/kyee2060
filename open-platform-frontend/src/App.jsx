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
                                            <Link to="/"><i></i><span>京颐知识共享平台</span></Link>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            {/*<li className="hvr-sweep-to-bottom"><Link to={"/modules"}>组件</Link></li>*/}
                                            {/*<li className="hvr-sweep-to-bottom"><Link to={"/services"}>服务</Link></li>*/}
                                            {/*<li className="hvr-sweep-to-bottom"><Link to={"/uis"}>UI</Link></li>*/}
                                            <li className="hvr-sweep-to-bottom"><Link to={"/tech/qs"}>架构</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/dev/cloud-dev"}>研发</Link></li>
                                            {/*<li className="hvr-sweep-to-bottom"><Link to={"/ops"}>运维</Link></li>*/}
                                            <li className="hvr-sweep-to-bottom"><Link to={"/backend"}>后端</Link> </li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/frontend"}>前端</Link> </li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/business"}>业务</Link> </li>
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
                                    <h3 className="title">站点地图</h3>
                                    <ul>
                                        <li><a href="http://www.kyee.com.cn/webmap.asp" target="_blank">京颐股份</a></li>
                                    </ul>
                                </div>
                                {/*<div className="col-md-4 footer-grid">*/}
                                    {/*<h3 className="title">站点地图</h3>*/}
                                    {/*<ul>*/}
                                        {/*<li><a href="http://www.kyee.com.cn/webmap.asp" target="_blank">京颐股份</a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-4 footer-grid">*/}
                                    {/*<h3 className="title">站点地图</h3>*/}
                                    {/*<ul>*/}
                                        {/*<li><a href="http://www.kyee.com.cn/webmap.asp" target="_blank">京颐股份</a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
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
