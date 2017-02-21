import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const { Sider} = Layout;


export default class Siderbar extends Component {

    render() {
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <h3>推荐技术选型</h3>
                                    <ul className="menu-list">
                                        <li className="active"><Link to="/tech">开发环境</Link></li>
                                        <li><Link to="/tech/java">Java框架</Link></li>
                                        <li><Link to="/tech/js">JS框架</Link></li>
                                        <li><Link to="/tech/env">运行环境</Link></li>
                                        <li><Link to="/tech/app">移动端框架</Link></li>
                                        <li><Link to="/tech/tool">支持工具</Link></li>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </Sider>

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

Siderbar.defaultProps = {
    caption: ['检查日期', '检查项目']
};
