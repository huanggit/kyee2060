import React, {Component} from "react";
import {Layout} from 'antd';
const {Content, Sider} = Layout;

export default class ModuleApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            methods: [],
            method: {"req": [], "rsp": []},
            activeLine: 0,
            needed: 9,
        };
    }

    componentDidMount() {
        global.get("/api/component/" + this.props.params.apiId, function (result) {
            this.setState({
                methods: result
            });
            var ms = this.state.methods;
            if (ms!=null && ms.length > 0) {
                global.get("/api/method/" + ms[0].id, function (result) {
                    this.setState({
                        method: result
                    })
                }.bind(this));
            }
        }.bind(this));
    }

    apiById(id, lineNum){
        this.setState({
            activeLine: lineNum
        });
        global.get("/api/method/" + id, function (result) {
            this.setState({
                method: result
            })
        }.bind(this));
    }

    render() {
        var t = this;
        var s = this.state;
        var methods = s.methods;
        var method = s.method;
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <h3>技术文档</h3>
                                    <ul className="menu-list">
                                        {
                                            (methods==null?[]:methods).map(function (api, i) {
                                                return <li key={i}
                                                           className={(i == s.activeLine) ? "active" : ""}
                                                           onClick={t.apiById.bind(t, api.id, i)}>
                                                    <a>{api.name}</a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </Sider>

                            <Content>
                                <div className="wrap-right">
                                    <div className="doc-content">
                                        <h2> 获取用户信息 </h2>
                                        <label>
                                            <span>请求接口</span>
                                            <div className="doc-table">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <th> 参数</th>
                                                        <th> 类型</th>
                                                        <th> 描述</th>
                                                        <th> 示例</th>
                                                    </tr>
                                                    {
                                                        (method.req==null?[]:method.req).map(function (param, i) {
                                                            return <tr key={i}>
                                                                <td>{param.name}</td>
                                                                <td>{param.type}</td>
                                                                <td>{param.desc}</td>
                                                                <td>{param.sample}</td>
                                                            </tr>
                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                根据用户ID获取用户个人信息。
                                            </p>

                                            <span>响应接口</span>
                                            <div className="doc-table">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <th> 参数</th>
                                                        <th> 类型</th>
                                                        <th> 描述</th>
                                                        <th> 示例</th>
                                                    </tr>
                                                    {
                                                        (method.rsp==null?[]:method.rsp).map(function (param, i) {
                                                            return <tr key={i}>
                                                                <td>{param.name}</td>
                                                                <td>{param.type}</td>
                                                                <td>{param.desc}</td>
                                                                <td>{param.sample}</td>
                                                            </tr>
                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                根据用户ID获取用户个人信息。
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </Content>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

