import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../../common/Entry'
const {Content} = Layout;

export default class Frontend extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                从基础的CSS+Javascript，到SASS+React，浏览器开发者工具，前端技术一网打尽。
                            </div>
                            <h3>前端技术</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/basic/speed"
                                        icon="bold"
                                        title="基础技能"
                                        like="0"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};

