import React from "react";
import { render } from "react-dom";
import { Router, Route, History,IndexRoute,hashHistory} from "react-router";


render(
	<Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/api" component={Api}/>
                </Route>
	</Router>
	document.getElementById("root")
);
