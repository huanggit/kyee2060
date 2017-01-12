import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default  class Home extends Component {
    render() {
        return (
            <Layout>
                <Content style={{padding: '30px 50px'}}>
                    <div>
                        <div>
                            <div>
                                <h1>公共资源</h1>
                            </div>
                            <ul>
                                <li><Link to={"/modules"}>公共组件</Link></li>
                                <li><Link to={"/services"}>公共服务</Link></li>
                                <li><Link to={"/uis"}>UI模板</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h1>架构规范</h1>
                            </div>
                            <ul>
                                <li><Link to={"/tech"}>技术架构</Link></li>
                                <li><Link to={"/"}>研发规范</Link></li>
                                <li><Link to={"/"}>运营机制</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h1>技术学习</h1>
                            </div>
                            <ul>
                                <li><Link to={"/backend"}>后端技术</Link></li>
                                <li><Link to={"/frontend"}>前端技术</Link></li>
                                <li><Link to={"/business"}>业务学习</Link></li>
                            </ul>
                        </div>

                    </div>
                </Content>
            </Layout>
        )
    }
}

