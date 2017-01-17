import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Uis extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                UI界面设计素材，公司统一UI风格，常用医疗行业小图标，公司产品风格统一化。
                            </div>
                            <h3>业务学习</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                <Entry  link="/module/api"
                                        icon="cog"
                                        title="UI模板库"
                                        viewed="213"
                                        needed="44"/>
                                <Entry  link="/module/api"
                                        icon="fire"
                                        title="小图标库"
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
