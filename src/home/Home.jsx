import React, {Component} from "react";
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header className="test1">头部随便写写|</Header>
                <Content style={{padding: '30px 50px'}}>
                    <div>
                        中间部分容器
                        {/*每一个大块*/}
                        <div>
                            <div>
                                <h1>大标题(公共资源)</h1>
                            </div>
                            <ul>
                                <li>公共组件</li>
                                <li>公共服务</li>
                                <li>模板。。</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h1>大标题(公共资源)</h1>
                            </div>
                            <ul>
                                <li>公共组件</li>
                                <li>公共服务</li>
                                <li>模板。。</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h1>大标题(公共资源)</h1>
                            </div>
                            <ul>
                                <li>公共组件</li>
                                <li>公共服务</li>
                                <li>模板。。</li>
                            </ul>
                        </div>

                    </div>
                </Content>
                <Footer className="test">Footer</Footer>
            </Layout>
        )
    }
}

export default Home;
