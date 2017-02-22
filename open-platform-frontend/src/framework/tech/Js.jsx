import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Js extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <div className="doc-content">
                        <h2>前端框架</h2>
                        <label>
                            <span>JS框架</span>
                            <p>jquery 版本：1.11.3</p>
                            <p>angularJS 版本：2.x</p>
                            <p>react 版本：16</p>

                            <span>UI组件</span>
                            <p>extJS 版本：6.0</p>
                            <p>bootstrap 版本：3.3.0</p>
                            <p>dHtmlx 版本：4.x</p>

                            <span>工具</span>
                            <p>requireJS 版本：2.1.20 依赖工具</p>
                            <p>kindeditor 版本：4.1.10 网页富文本编辑器</p>
                            <p>lodash 版本：4.17.4</p>
                            <p>crypto-js 版本：3.1.2 前端加密工具</p>

                            <span>APP</span>
                            <p>ionic 版本：1.x,2.x</p>
                            <p>angularjs 版本：1.x,2.x</p>
                            <p>lodash 版本：4.17.4</p>
                            <p>cordova 版本：6</p>

                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
