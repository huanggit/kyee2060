import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, History, hashHistory} from "react-router";
import App from "./App";
import Home from "./Home";
import Modules from "./api/Modules";
import Services from "./api/Services";
import Uis from "./api/Uis";
import Detail from "./api/Detail";
import TechSide from "./framework/tech/Siderbar";
import TechDev from "./framework/tech/Dev"
import TechJava from "./framework/tech/Java"
import TechJs from "./framework/tech/Js"
import TechEvn from "./framework/tech/Env"
import TechTool from "./framework/tech/Tool"
import TechApp from "./framework/tech/App"
import Dev from "./framework/Dev";
import Ops from "./framework/Ops";
import Backend from "./study/Backend";
import Frontend from "./study/Frontend";
import Business from "./study/Business";

import '../config'


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="api/:apiId" component={Detail}/>
                    <Route path="modules" component={Modules}/>
                    <Route path="services" component={Services}/>
                    <Route path="uis" component={Uis}/>

                    <Route path="tech" component={TechSide}>
                        <IndexRoute component={TechDev}/>
                        <Route path="java" component={TechJava}/>
                        <Route path="js" component={TechJs}/>
                        <Route path="env" component={TechEvn}/>
                        <Route path="js" component={TechTool}/>
                        <Route path="js" component={TechApp}/>
                    </Route>
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
