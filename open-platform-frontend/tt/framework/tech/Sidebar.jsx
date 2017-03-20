import React, {Component} from "react";
import { Link } from 'react-router';


export default class Sidebar extends Component {

    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <div>
                                <div className="wrap-left">
                                    <h3>推荐技术选型</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/tech/"+t.link} activeClassName="active">{t.name}</Link></li>
                                        })}
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </div>

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Sidebar.defaultProps = {
    caption: [
        {"link":"qs","name":"快速开发"},
        {"link":"java","name":"Java框架"},
        {"link":"js","name":"前端框架"},
        {"link":"env","name":"环境&中间件&DB"},
        {"link":"tool","name":"语言&工具"}
    ]
};
