import React, {Component, PropTypes} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;

class Grid extends Component {

    render() {
        return (
            <Layout>
                <Content style={{padding: '30px 50px'}}>
                    <div>
                        <div>
                            <h1>{this.props.caption}</h1>
                        </div>
                        <ul>
                            {this.props.items.map(function (item) {
                                return <li key={item.title}><Link to={item.link}>{item.title}</Link></li>
                            })}
                        </ul>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Grid;
