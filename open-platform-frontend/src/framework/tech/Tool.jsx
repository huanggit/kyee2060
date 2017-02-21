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
                        <h2> 推荐技术选型 </h2>
                        <label>
                            <span>后端框架</span>
                            <p>
                                1.1、技术运维服务
                                基础设施管理，服务器的管理，DBA，各种系统监控的管理
                                1.2、产品运维服务
                                产品的发布、产品上线配置、业务监控等
                            </p>

                            <span>工作内容标准化</span>
                            <p>
                                2.1.1、院内系统运维工作内容
                                2.1.2、云端系统运维工作内容
                            </p>

                            <span>流程制度规范</span>
                            <p>
                                2.2.1、基础管理流程规范
                                2.2.2、产品交付流程规范
                                2.2.3、系统管理制度规范
                                系统监控、系统安全
                                2.2.4、产品应用管理制度规范
                                上线，下线，应用操作，业务对账
                                2.2.5、客服值班制度规范
                                2.2.6、故障处理流程规范
                            </p>

                            <span>平台工具标准化</span>
                            <p>
                                2.3.1、发布工具规范
                                2.3.2、资产管理系统规范
                                2.3.3、配置管理系统规范
                                2.3.4、监控平台规范
                                2.3.5、安全审计工具规范
                                2.3.6、常用工具规范
                            </p>

                            <span>运维考核规范</span>
                            <p>
                                3、运维考核规范
                            </p>
                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
