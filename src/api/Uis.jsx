import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Uis extends Component {


    render() {
        return (
            <Grid caption={this.props.caption} items={this.props.items}/>
        )
    }
};

Uis.defaultProps = {
    caption: "公共UI",
    items: [
        {"link": "/module/api", "title": "UI模板"},
        {"link": "/module/api", "title": "常用图标库"},
    ]
};

