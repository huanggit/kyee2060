import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, History, hashHistory} from "react-router";
import App from "./App";
import Home from "./Home";
import Modules from "./api/Modules";
import Services from "./api/Services";
import Uis from "./api/Uis";
import ModuleApi from "./api/ModuleApi";

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="modules" component={Modules}/>
                    <Route path="services" component={Services}/>
                    <Route path="uis" component={Uis}/>

                    <Route path="module/api" component={ModuleApi}/>
                </Route>
            </Router>
        );
    }
}
