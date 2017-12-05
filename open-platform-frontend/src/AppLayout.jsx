import React, {Component} from "react"
import { Link } from 'react-router';



export default class AppLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            editMode: (localStorage.getItem("editMode") == 'true'),
        };
    }

    componentDidMount() {
        global.get("isAuthor", function (result) {
            this.setState({
                auth: result
            })
        }.bind(this));
    }

    render() {
        var s = this.state;
        return (
            <div>
                <div>
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
                                            <li className="hvr-sweep-to-bottom"><Link to={"/technology"}>架构</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/services"}>服务</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/modules"}>组件</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/system"}>系统</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/doc/ui"}>UI</Link></li>

                                            <li className="hvr-sweep-to-bottom"><Link to={"/develops"}>研发</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/doc/ops"}>运维</Link></li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/backend"}>后端</Link> </li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/frontend"}>前端</Link> </li>
                                            <li className="hvr-sweep-to-bottom"><Link to={"/business"}>业务</Link> </li>
                                        </ul>
                                        <div className="logout"><Link to={"/login"}>退出</Link></div>
                                        {s.auth && (<div className="editMode"><a onClick={function () {
                                            var toggledMode = !this.state.editMode;
                                            localStorage.setItem("editMode", toggledMode);
                                            this.setState({
                                                editMode: toggledMode
                                            });
                                            location.reload();
                                        }.bind(this)}>{s.editMode?"浏览":"编辑"}</a></div>)}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                {this.props.children}
                </div>
                <div>
                    <div className="footer">
                        <div className="container">
                            <div className="footer-grids">
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">站点地图</h3>
                                    <ul>
                                        <li><a href="http://www.kyeegroup.com" target="_blank">京颐集团</a></li>
                                        <li><a href="http://www.kyee.com.cn" target="_blank">京颐股份</a></li>
                                        <li><a href="https://www.quyiyuan.com" target="_blank">趣医网</a></li>
                                        <li><a href="http://www.feiyi.com.cn" target="_blank">飞医网</a></li>
                                        <li><a href="http://www.haohushi.me" target="_blank">小趣好护士</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-grid">
                                    <h3 className="title">基础设施</h3>
                                    <ul>
                                        <li><a href="http://cdn.kyeegroup.com/" target="_blank">静态资源CDN</a></li>
                                        <li><a href="http://nexus.kyeegroup.com/" target="_blank">依赖仓库Nexus</a></li>
                                        <li><a href="http://git.kyeegroup.com/" target="_blank">代码协作GitLab</a></li>
                                        <li><a href="https://sonar.kyeegroup.com/" target="_blank">代码质量Sonar</a></li>
                                    </ul>
                                </div>
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
                                <p>© 2017 京颐集团 | 2060实验室</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
