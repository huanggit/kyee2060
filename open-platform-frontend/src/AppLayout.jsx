import React, {Component} from "react"
import { Link } from 'react-router';
import {Layout} from 'antd'
const {Header, Footer} = Layout;



export default class AppLayout extends Component {
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
                                            <Link to="/"><i></i><span>| 知识共享平台</span></Link>
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
                                            <li className="hvr-sweep-to-bottom"><Link to={"/businessOverall/all"}>业务</Link> </li>
                                        </ul>
                                        <div className="logout"><Link to={"/login"}>退出</Link></div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Header>
                <div className="content">
                {this.props.children}
                </div>
                <Footer>
                    <div className="footer">
                        <div className="container">
                            <div className="footer-grids">
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">站点地图</h3>
                                    <ul>
                                        <li><a href="http://www.kyee.com.cn/webmap.asp" target="_blank">京颐股份</a></li>
                                        <li><a href="http://nexus.kyeegroup.com/" target="_blank">集团nexus</a></li>
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
                                <p>© 2017 上海京颐云杏网络技术有限公司 | 2060实验室</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </Footer>
            </Layout>
        )
    }
}
