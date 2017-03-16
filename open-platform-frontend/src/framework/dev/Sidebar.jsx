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
                                    <h3>研发规范</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/dev/"+t.link} activeClassName="active">{t.name}</Link></li>
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
        {"link":"cloud-dev","name":"云端研发流程"},
        // {"link":"local-dev","name":"院端研发流程"},
        {"link":"code-spec","name":"代码开发规范"},
        // {"link":"sql-spec","name":"SQL开发规范"},
    ]
};
