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
                                    <h3>UI资源</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/ui/"+t.link} activeClassName="active">{t.name}</Link></li>
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
        {"link":"webSpecs","name":"网页UI视觉规范"},
        {"link":"loginTemplates","name":"登录页面模板"},
    ]
};
