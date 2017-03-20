import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, History, hashHistory} from "react-router";

import Login from "./Login";
import AppLayout from "./AppLayout";
import Home from "./Home";
import Modules from "./api/Modules";
import Services from "./api/Services";
import Backend from "./study/Backend";
import Frontend from "./study/Frontend";
import Business from "./study/Business";
import Doc from "./doc/Doc";


export default class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: !global.requireLogin,
        }
    }

    requireAuth(next, replace) {
        if (!this.state.loggedIn) {
            global.syncGet("isLogin", function (result) {
                if (result == 'true') {
                    this.state.loggedIn = true;
                }
            }.bind(this));
        }
        if (!this.state.loggedIn) {
            replace({nextPathname: next.location.pathname}, '/login');
        }
    }

    logout() {
        this.setState({
            loggedIn: false
        });
        global.get("doLogout", function () {
        });
    }

    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/login" component={Login} onEnter={this.logout.bind(this)}/>
                <Route path="/" component={AppLayout} onEnter={this.requireAuth.bind(this)}>
                    <IndexRoute component={Home}/>
                    <Route path="modules" component={Modules}/>
                    <Route path="services" component={Services}/>
                    <Route path="backend" component={Backend}/>
                    <Route path="business" component={Business}/>
                    <Route path="frontend" component={Frontend}/>
                    <Route path="doc/:id" component={Doc}/>
                </Route>
            </Router>
        );
    }
}
