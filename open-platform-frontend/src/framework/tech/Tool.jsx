import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Tool extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <div className="doc-content">
                        <h2>语言&工具</h2>
                        <label>
                            <span>语言</span>
                            <p>java8 & python</p>
                            <p>javascript & typescript</p>

                            <span>版本管理</span>
                            <p>GIT</p>
                            <p>SVN</p>

                            <span>构建工具</span>
                            <p>maven</p>
                            <p>grunt</p>
                            <p>gulp</p>
                            <p>nexus</p>

                            <span>开发IDE</span>
                            <p>IDEA</p>
                            <p>Eclipse</p>
                            <p>WebStorm</p>
                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
