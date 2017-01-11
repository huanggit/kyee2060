import React, { Component } from "react";

class App extends Component {

    render() {
        return (
            <div id="ehrContent">
                <Header/>
                <div className="content">{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
}

export default App;