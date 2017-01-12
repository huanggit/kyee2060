import React, {Component} from "react";
import { Link } from 'react-router';
import {Layout} from 'antd';
const {Content} = Layout;


class Home extends Component {
    render() {
        return (
            <Layout>
                <Content style={{padding: '30px 50px'}}>

                    <table border="1">
                        <tr>
                            <th>Month</th>
                            <th>Savings</th>
                        </tr>
                        <tr>
                            <td>January</td>
                            <td>$100</td>
                        </tr>
                    </table>
                </Content>
            </Layout>
        )
    }
}

export default Home;
