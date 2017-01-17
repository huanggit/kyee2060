import React, {Component} from "react";
import {Link} from 'react-router';

export default  class Entry extends Component {
    render() {
        return (
            <div className="col-md-4 welcome-grid">
                <Link to={this.props.link}>
                    <div className="list-content">
                        <div className="list-item">
                            <div className="list-item-icon">
                                <span className={"glyphicon glyphicon-"+this.props.icon}> </span>
                            </div>
                            <div className="list-item-title">{this.props.title}</div>
                            <div className="list-item-count">
                                <div className="listcount">
                                    <span className="view glyphicon glyphicon-eye-open"><cite>{this.props.viewed}</cite></span>
                                    <span className="need glyphicon glyphicon-heart"><cite>{this.props.needed}</cite></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
