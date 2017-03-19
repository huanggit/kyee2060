import React, {Component} from "react";
import { Link } from 'react-router';


export default class Doc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likesByTitle: {}
        }
    }

    componentDidMount() {
        global.get("/like/countGroupingByTitle", function (result) {
            this.setState({
                likesByTitle: result
            })
        }.bind(this));
    }

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


