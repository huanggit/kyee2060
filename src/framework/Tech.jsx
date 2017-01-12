import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Tech extends Component {
    render() {
        return (
            <Layout>
                <Content style={{padding: '30px 50px'}}>
                    <div>
                        <h1>技术架构</h1>
                    </div>
                    <table border="1">
                        <tr>
                            <th>类别</th>
                            <th>用途</th>
                            <th>推荐</th>
                            <th>版本</th>
                            <th>其他可用版本</th>
                            <th>备注</th>
                        </tr>
                        {this.props.items.map(function (item) {
                            return <tr>
                                {item.map(function(td){
                                    return <td>{td}</td>
                            })}
                            </tr>
                        })}
                    </table>
                </Content>
            </Layout>
        )
    }
}

Tech.defaultProps = {
    items: [
        ["开发语言",	"后端语言",	"Java", "Version 8 Update 111","","推荐选择 8+ 系列最新版"],
        ["开发语言","前端语言","JavaScript","ES6","ES5","推荐使用ES6编写代码，用bable转成ES5",],
        ["后端框架","项目脚手架","Spring Boot","1.4.3","1.3.8","",],
        ["后端框架","微服务框架","Spring Cloud","Brixton SR7","Angel SR6","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
        ["","","","","","",],
    ]
};