import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const { Sider} = Layout;


export default class Sidebar extends Component {

    render() {
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <h3>产品手册</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/business/"+t.link} activeClassName="active">{t.name}</Link></li>
                                        })}
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </Sider>

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

Sidebar.defaultProps = {
    caption: [
        {"link":"all","name":"公司业务架构"},
        {"link":"mobile","name":"移动医疗事业部"},
        {"link":"yhis","name":"云HIS事业部"},
        {"link":"hrp","name":"HRP事业部"},
        {"link":"lot","name":"物联网事业部"},
        {"link":"edu","name":"护理教育事业部"},
        {"link":"hcrm","name":"HCRM事业部"},
        {"link":"one-card-pass","name":"一卡通事业部"},
        {"link":"cloud","name":"医疗云事业部"},
        {"link":"pay","name":"综合支付事业部"},
        {"link":"app","name":"APP事业部"},
        {"link":"hierarchical-medical","name":"分级诊疗事业部"},
        {"link":"insurance","name":"保险事业部"},
        {"link":"creative-center","name":"上海创新中心"},
        {"link":"supply","name":"飞医网"},
        {"link":"nursing","name":"趣护"},
    ]
};
