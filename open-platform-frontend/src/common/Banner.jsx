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
                                            <Link to={"/java8/interface-default"}>
                                            <h1>学习Java8，让我们一起当学霸</h1>
                                            <p>Java8紧跟时代，引入了函数式语言的特性，是一个新的里程碑。
                                                Java8带来了前所未有的诸多特性，lambda表达式，Stream API，新的Date time api，
                                                多核并发支持，重大安全问题改进等。让我们立刻开始学习常用新特性以及相关的用法。</p>
                                            </Link>
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

