import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Env extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <div className="doc-content">
                        <h2>环境&中间件&DB</h2>
                        <label>
                            <span>关系型数据库</span>
                            <p>MySQL 版本：5.6, 5.7 优先使用阿里云服务</p>
                            <p>Oracle 版本：11 仅院端系统可采用</p>
                            <p>PPAS 版本：9.3</p>

                            <span>NoSQL</span>
                            <p>Redis 阿里云服务</p>
                            <p>MongoDB 阿里云服务</p>

                            <span>操作系统</span>
                            <p>centos 版本：7.2 64位 云端项目统一使用 centos</p>
                            <p>windows server 版本：2008 64位 院端项目可采用 windows</p>

                            <span>容器服务</span>
                            <p>docker 鉴于 oracle jdk 版权原因，docker 中统一使用 open jdk 版本</p>

                            <span>JDK</span>
                            <p>oracle jdk 版本：8u121</p>

                            <span>servlet容器</span>
                            <p>Tomcat 版本：8</p>

                            <span>HTTP服务器</span>
                            <p>nginx 版本：1.10.3</p>
                            <p>tengine 版本：2.1.2</p>
                            <p>apache http server 版本：2.4.25</p>

                            <span>代理服务器</span>
                            <p>squid 版本：3.5.24</p>

                            <span>消息队列</span>
                            <p>rabbitMQ 版本：3.6.6</p>
                            <p>Kafka 版本：0.10.1.1</p>
                            <p>emqttd 版本：2.0.7</p>
                            <p>阿里云消息服务</p>

                            <span>搜索引擎</span>
                            <p>elasticsearch 版本：5.2.0</p>

                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
