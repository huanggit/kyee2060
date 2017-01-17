import React, {Component} from "react"
import { Link } from 'react-router';
import {Layout} from 'antd'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="flexslider">
                        <div className="flex-viewport">
                            <ul className="slides">
                                <li className="clone">
                                    <div className="banner-info">
                                        <div className="banner-info-left">
                                            <h1>在这里，我们一起当学霸</h1>
                                            <p>Spring Cloud是Pivotal提供的用于简化分布式系统构建的工具集。
                                                Spring Cloud引入了云平台连接器(Cloud Connector)和服务连接器(Service Connector)的概念。
                                                云平台连接器是一个接口，需要由云平台提供者进行实现，以便库中的其他模块可以与该云平台协同工作。</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

