import React, {Component} from "react";
import {Layout} from 'antd';
const {Content, Sider} = Layout;

export default class ModuleApi extends Component {
    render() {
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <h3>技术文档</h3>
                                    <ul className="menu-list">
                                        <li className="active"><a href="javascript:void(0)">获取用户信息</a></li>
                                        <li><a href="javascript:void(0)">登录接口</a></li>
                                        <li><a href="javascript:void(0)">登出接口</a></li>
                                        <li><a href="javascript:void(0)">更新用户信息</a></li>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </Sider>

                            <Content>
                                <div className="wrap-right">
                                    <div className="doc-need">
                                        <a href="#"> <span className="glyphicon glyphicon-heart" > </span> 我需要 <cite>(6)</cite> </a>
                                    </div>
                                    <div className="doc-content">
                                        <h2> 获取用户信息 </h2>
                                        <label>
                                            <span>请求接口</span>
                                            <div className="doc-table">
                                                <table>
                                                    <tr>
                                                        <th> 参数 </th>
                                                        <th> 类型 </th>
                                                        <th> 描述 </th>
                                                        <th> 示例 </th>
                                                    </tr>
                                                    <tr>
                                                        <td> personId </td>
                                                        <td> String </td>
                                                        <td> 用户ID </td>
                                                        <td> 2014072300007148 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> timestamp </td>
                                                        <td> long </td>
                                                        <td> 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss" </td>
                                                        <td> 2014-07-24 03:07:50 </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <p>
                                                根据用户ID获取用户个人信息。
                                            </p>

                                            <span>响应接口</span>
                                            <div className="doc-table">
                                                <table>
                                                    <tr>
                                                        <th> 参数 </th>
                                                        <th> 类型 </th>
                                                        <th> 描述 </th>
                                                        <th> 示例 </th>
                                                    </tr>
                                                    <tr>
                                                        <td> personId </td>
                                                        <td> String </td>
                                                        <td> 用户ID </td>
                                                        <td> 2014072300007148 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> personName </td>
                                                        <td> String </td>
                                                        <td> 用户姓名 </td>
                                                        <td> 张三 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> idNo </td>
                                                        <td> String </td>
                                                        <td> 用户证件号码 </td>
                                                        <td> 32011199912121133 </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <p>
                                                根据用户ID获取用户个人信息。
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </Content>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

