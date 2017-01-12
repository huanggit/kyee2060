import React, {Component} from "react";
import {Layout} from 'antd';
const {Content, Sider} = Layout;

export default class ModuleApi extends Component {
    render() {
        return (
            <Layout>
                <Sider>left sidebar</Sider>
                <Content style={{padding: '30px 50px'}}>
                </Content>
            </Layout>
        )
    }
}

