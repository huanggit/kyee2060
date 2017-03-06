import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, History, hashHistory} from "react-router";

import App from "./App";
import Home from "./Home";
import Modules from "./api/Modules";
import Services from "./api/Services";
import Uis from "./api/Uis";
import Detail from "./api/Detail";

import TechSide from "./framework/tech/Sidebar";
import TechQuickStart from "./framework/tech/QuickStart"
import TechJava from "./framework/tech/Java"
import TechJs from "./framework/tech/Front"
import TechEvn from "./framework/tech/Env"
import TechTool from "./framework/tech/Tool"

import DevSide from "./framework/dev/Sidebar";
import CloudDev from "./framework/dev/CloudDev"
import LocalDev from "./framework/dev/LocalDev"
import CodeSpecs from "./framework/dev/CodeSpecs"
import SqlSpecs from "./framework/dev/SqlSpecs"

import BasicSidebar from "./study/backend/basic/Sidebar";
import Speed from "./study/backend/basic/Speed";
import Solve from "./study/backend/basic/Solve";
import Backend from "./study/backend/Backend";
import Java8Sidebar from "./study/backend/java8/Sidebar"
import InterfaceDefault from "./study/backend/java8/InterfaceDefault"
import DateTime from "./study/backend/java8/DateTime"
import Lambda from "./study/backend/java8/Lambda"
import Stream from "./study/backend/java8/Stream"

import Frontend from "./study/frontend/Frontend";
import Business from "./study/business/Business";


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
                        <Route path="qs" component={TechQuickStart}/>
                        <Route path="java" component={TechJava}/>
                        <Route path="js" component={TechJs}/>
                        <Route path="env" component={TechEvn}/>
                        <Route path="tool" component={TechTool}/>
                    </Route>

                    <Route path="dev" component={DevSide}>
                        <Route path="cloud-dev" component={CloudDev}/>
                        <Route path="local-dev" component={LocalDev}/>
                        <Route path="code-spec" component={CodeSpecs}/>
                        <Route path="sql-spec" component={SqlSpecs}/>
                    </Route>

                    <Route path="basic" component={BasicSidebar}>
                        <Route path="speed" component={Speed}/>
                        <Route path="solve" component={Solve}/>
                    </Route>
                    <Route path="backend" component={Backend}/>
                    <Route path="java8" component={Java8Sidebar}>
                        <Route path="interface-default" component={InterfaceDefault}/>
                        <Route path="date-time" component={DateTime}/>
                        <Route path="lambda" component={Lambda}/>
                        <Route path="stream" component={Stream}/>
                    </Route>

                    <Route path="frontend" component={Frontend}/>
                    <Route path="js" component={Java8Sidebar}>
                        <Route path="interface-default" component={InterfaceDefault}/>
                        <Route path="date-time" component={DateTime}/>
                        <Route path="lambda" component={Lambda}/>
                        <Route path="stream" component={Stream}/>
                    </Route>

                    <Route path="business" component={Business}/>
                </Route>
            </Router>
        );
    }
}
