import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
import ReactMarkdown from 'react-markdown';
const {Content} = Layout;


export default class RightMarkDown extends Component {
    render() {
        return (
            <Content>
                <div className="wrap-right">
                    <ReactMarkdown escapeHtml={true} source={this.props.source.join('\n')}/>
                </div>
            </Content>
        );
    }
}