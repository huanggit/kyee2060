import React, {Component} from "react"
import { Link } from 'react-router';
import {Layout} from 'antd'
const {Header, Footer} = Layout;


class App extends Component {

    render() {
        return (
            <Layout>
                <Header className="test1"><Link to={"/"}>KYEE | 开发学习平台</Link></Header>
                {this.props.children}
                <Footer className="test">Footer</Footer>
            </Layout>
        )
    }
}

export default App;
