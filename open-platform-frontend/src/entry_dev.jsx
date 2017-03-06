import React from "react";
import { render } from "react-dom";
import AppRouter from "./AppRouter";

import '../config_dev'
import './globeFun'

render(
    <AppRouter />,
    document.getElementById("root")
);
