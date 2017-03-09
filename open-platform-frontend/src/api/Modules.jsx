import React, {Component} from "react";
import {Link} from 'react-router';
import {Layout} from 'antd';
import Entry from '../common/Entry'
const {Content} = Layout;

export default class Modules extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: {"back": [], "front": [], "app": [], "bus": []}
        }
    }

    componentDidMount() {
        global.get("/api/components", function (result) {
            if (result)
                this.setState({
                    api: result
                })
        }.bind(this));
    }

    componentLink(id) {
        return "/api/"+id;
    }

    render() {
        var t = this;
        var api = this.state.api;
        return (
            <Layout>
                <Content>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介</div>
                                公司公共组件库API文档。
                                公司maven私服地址：http://115.28.172.54:8081。
                                公司git地址：http://192.168.1.11/git。
                            </div>
                            <h3>后端组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.back.map(function (api, i) {
                                        return <Entry key={i}
                                                      link={t.componentLink(api.id)}
                                                      icon={api.icon}
                                                      title={api.name}
                                                      needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>前端组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.front.map(function (api, i) {
                                        return <Entry key={i}
                                                      link={t.componentLink(api.id)}
                                                      icon={api.icon}
                                                      title={api.name}
                                                      needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>APP组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.app.map(function (api, i) {
                                        return <Entry key={i}
                                                      link={t.componentLink(api.id)}
                                                      icon={api.icon}
                                                      title={api.name}
                                                      needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>业务组件</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.bus.map(function (api, i) {
                                        return <Entry key={i}
                                                      link={t.componentLink(api.id)}
                                                      icon={api.icon}
                                                      title={api.name}
                                                      needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                </Content>
            </Layout>
        )
    }
};

