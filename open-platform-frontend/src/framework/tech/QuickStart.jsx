import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class QuickStart extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <div className="doc-content">
                        <h2>开发环境</h2>
                        <label>
                            <span>公司maven私服</span>
                            <p>
                                公司maven私服。
                                windows在C:\用户\xxx\.m2\settings.xml文件里，添加:
                            </p>
                            <p>
                                <textarea readOnly="true" rows="6" cols="40"
                                          value="&lt;mirror&gt;&#13;&#10;
                                      &lt;id&gt;alimaven&lt;/id&gt;&#13;&#10;
                                      &lt;name&gt;aliyun maven&lt;/name&gt;&#13;&#10;
                                      &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;&#13;&#10;
                                      &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;&#13;&#10;
                                    &lt;/mirror&gt;"/>
                            </p>

                            <span>快速开发 - SpringBoot+Mybatis+Thymeleaf</span>
                            <p>
                                快速搭建一个web项目+数据库+页面模板引擎
                                下载包地址：xxxxxx
                            </p>

                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
