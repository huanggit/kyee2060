import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


export default class Java extends Component {
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
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &emsp;&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                    &emsp;&lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;&#13;&#10;
                                    &emsp;&lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>

                            <span>todo</span>
                            <p>
                                简化新Spring应用的初始搭建以及开发过程。
                                该框架通过项目依赖来配置相应bean对象，从而使开发人员不再需要定义xml。
                            </p>
                            <p>
                                <textarea readOnly="true" rows="5" cols="40"
                                          value="&lt;dependency&gt;&#13;&#10;
                                    &emsp;&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;&#13;&#10;
                                    &emsp;&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;&#13;&#10;
                                    &emsp;&lt;version&gt;1.5.1.RELEASE&lt;/version&gt;&#13;&#10;
                                    &lt;/dependency&gt;"/>
                            </p>


                        </label>
                    </div>
                </div>
            </Content>
        )
    }
}
