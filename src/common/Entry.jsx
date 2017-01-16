import React, {Component} from "react";
import { Link } from 'react-router';

export default  class Entry extends Component {
    render() {
        return (
            <div className="col-md-4 welcome-grid">
                <Link to={"/modules"}>
                    <div className="welcome-grd">
                        <div className="icons">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </div>
                        <h4>公共组件</h4>
                        <p> 在这里提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件下载、 组件升级日志等。</p>
                    </div>
                </Link>
            </div>
        )
    }
}
