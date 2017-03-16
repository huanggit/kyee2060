import React, {Component} from "react";
import { Link } from 'react-router';
import Entry from '../common/Entry'

export default class Services extends Component {


    constructor(props) {
        super(props);
        this.state = {
            api: {"inner":[],"outer":[]}
        }
    }

    componentDidMount() {
        global.get("/api/services", function (result) {
            this.setState({
                api : result
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
            <div>
                <div>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                公司公共服务API文档。通过HTTP为所有项目组提供公共服务。
                            </div>
                            <h3>内部服务</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.inner.map(function (api,i) {
                                        return <Entry  key={i}
                                                       link={t.componentLink(api.id)}
                                                       icon={api.icon}
                                                       title={api.name}
                                                       needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome">
                        <div className="container">
                            <h3>外部服务</h3>
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    api.outer.map(function (api,i) {
                                        return <Entry  key={i}
                                                       link={t.componentLink(api.id)}
                                                       icon={api.icon}
                                                       title={api.name}
                                                       needed={api.like}/>
                                    })
                                }
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

