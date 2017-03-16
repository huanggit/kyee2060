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
                                    <h3>运维机制</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/ops/"+t.link} activeClassName="active">{t.name}</Link></li>
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
        {"link":"org","name":"集团运维组织"},
        {"link":"role","name":"运维角色"},
    ]
};
