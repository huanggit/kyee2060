import React, {Component} from "react";
import {Link} from 'react-router';

export default  class Entry extends Component {


    dis(num) {
        return num ? num : 0;
    }

    render() {
        return (
            <div className="list-content">
                <Link to={this.props.link}>
                    <div className="list-item">
                        <div className="list-item-icon">
                            <span className={"glyphicon glyphicon-" + this.props.icon}> </span>
                        </div>
                        <div className="list-item-title">{this.props.title}</div>
                        <div className="list-item-count">
                            <div className="listcount">
                                {/*<span className="view glyphicon glyphicon-eye-open"><cite>{this.props.viewed}</cite></span>*/}
                                <span
                                    className="like glyphicon glyphicon-heart"><cite>{this.dis(this.props.like)}</cite></span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
