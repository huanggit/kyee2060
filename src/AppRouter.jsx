import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute} from "react-router";
import App from "./App";
import Home from "./home/Home";
import Api from "./api/Api";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/api" component={Api}/>
                </Route>
            </Router>
        );
    }
}