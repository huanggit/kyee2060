import React, {Component} from "react"
import { Link } from 'react-router';

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
                                            <Link to={"/"}>
                                                <h1>京颐知识共享平台初版上线</h1>
                                                <p>京颐集团发展迅速，目前已有逾14个事业部，超过50个产品。
                                                    为了统一集团资源，流程，方案，避免各个事业部各自作战，重复开发，
                                                    集团集中优势兵力，推出京颐知识共享平台。
                                                    在这里，你可以学习公司推荐技术选型，查看公司规范；
                                                    你可以通过学习地图学习技术，业务；可以查看使用各种公共组件，UI资源。
                                                    初版上线，各种新内容新功能敬请期待。
                                                </p>
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

