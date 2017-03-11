import React, {Component} from "react";
import {Link} from 'react-router';
import {Layout} from 'antd';
const {Sider} = Layout;


export default class SidebarTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeIt: false,
        };
    }

    componentDidMount() {
        global.get("/like/isLike/" + this.props.nav, function (result) {
            this.setState({
                likeIt: result
            })
        }.bind(this));
    }

    toggleLike() {
        global.get("/like/toggle/" + this.props.nav, function () {
            this.setState({
                likeIt: !this.state.likeIt,
            })
        }.bind(this));
    }

    render() {
        var nav = this.props.nav;
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <div className={this.state.likeIt ? "liked-it" : "like-it"}
                                         onClick={this.toggleLike.bind(this)}>
                                        <span className="glyphicon glyphicon-heart"> </span>
                                    </div>
                                    <h3>{this.props.title}</h3>
                                    <ul className="menu-list">
                                        {this.props.caption.map(function (t, i) {
                                            return <li key={i}><Link to={"/" + nav + "/" + t.link}
                                                                     activeClassName="active">{t.name}</Link></li>
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

