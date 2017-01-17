import React, {Component} from "react";

export default class Uis extends Component {


    render() {
        return (
            <Div></Div>
        )
    }
};

Uis.defaultProps = {
    caption: "公共UI",
    items: [
        {"link": "/module/api", "title": "UI模板库"},
        {"link": "/module/api", "title": "常用图标库"},
    ]
};

