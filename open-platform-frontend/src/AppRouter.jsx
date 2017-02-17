import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, History, hashHistory} from "react-router";
import App from "./App";
import Home from "./Home";
import Modules from "./api/Modules";
import Services from "./api/Services";
import Uis from "./api/Uis";
import Detail from "./api/Detail";
import Tech from "./framework/Tech";
import Dev from "./framework/Dev";
import Ops from "./framework/Ops";
import Backend from "./study/Backend";
import Frontend from "./study/Frontend";
import Business from "./study/Business";

// import 'globe'
import '../config'


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="api/:apiId/method/:methodId" component={Detail}/>
                    <Route path="modules" component={Modules}/>
                    <Route path="services" component={Services}/>
                    <Route path="uis" component={Uis}/>

                    <Route path="tech" component={Tech}/>
                    <Route path="dev" component={Dev}/>
                    <Route path="ops" component={Ops}/>

                    <Route path="backend" component={Backend}/>
                    <Route path="frontend" component={Frontend}/>
                    <Route path="business" component={Business}/>
                </Route>
            </Router>
        );
    }
}
