import React, {Component} from "react";
// import Header from "./common/Header";
// import Footer from "./common/Footer";

class App extends Component {

    render() {
        return (
            <div id="content">
                {/*<Header/>*/}
                <div className="body">{this.props.children}</div>
                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
