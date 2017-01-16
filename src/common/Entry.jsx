import React, {Component} from "react";
import { Link } from 'react-router';

export default  class Entry extends Component {
    render() {
        return (
            <div className="col-md-4 welcome-grid">
                <Link to={this.props.link}>
                    <div className="welcome-grd">
                        <div className="icons">
                            <span className={"glyphicon glyphicon-"+this.props.icon} aria-hidden="true"></span>
                        </div>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.sub}</p>
                    </div>
                </Link>
            </div>
        )
    }
}
