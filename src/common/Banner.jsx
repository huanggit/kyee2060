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
                                {/*<li className="clone">*/}
                                    {/*<div className="banner-info">*/}
                                        {/*<div className="banner-info-left">*/}
                                            {/*<h1>程序员必须知道的研发流程</h1>*/}
                                            {/*<p>研发工作一定是并行的，通过并行可以大大缩短产品的开发时间TTM （Time to Market）。*/}
                                                {/*产品开发流程按照角色（Role）来设计，不管公司的组织结构如何变化，流程的整体架构不会变化，*/}
                                                {/*确保流程在公司稳定执行，同时也可根据公司的发展来不断细化流程，达到持续改进的目的。</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

