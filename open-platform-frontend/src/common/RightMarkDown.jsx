import React, {Component} from "react";
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';


export default class RightMarkDown extends Component {
    render() {
        return (
            <div>
                <div className="wrap-right">
                    <ReactMarkdown escapeHtml={true} source={this.props.source.join('\n')}/>
                </div>
            </div>
        );
    }
}