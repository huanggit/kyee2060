import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../../common/Entry'
const {Content} = Layout;

export default class Business extends Component {


    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                医疗行业有哪些细分市场？公司几十个项目组都在做什么？要想代码写的好，业务知识要学好。
                            </div>
                            <h3>业务学习</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="HIS业务"
                                        viewed="213"
                                        needed="44"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="趣医业务"
                                        viewed="33"
                                        needed="3"/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};


