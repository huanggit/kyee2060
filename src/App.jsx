import React, {Component} from "react"
import {Layout} from 'antd'
const {Header, Footer, Sider, Content} = Layout;

// import Header from "./common/Header";
// import Footer from "./common/Footer";

class App extends Component {

    render() {
        return (
            <Layout>
                <Header className="test1">头部随便写写|</Header>
                <div className="body">{this.props.children}</div>

                <Footer className="test">Footer</Footer>

            </Layout>
            // <div id="content">
            //     {/*<Header/>*/}
            //     <div className="body">{this.props.children}</div>
            //     {/*<Footer/>*/}
            // </div>
        )
    }
}

export default App;
