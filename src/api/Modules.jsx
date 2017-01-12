import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Modules extends Component {


    render() {
        return (
            <Grid caption={this.props.caption} items={this.props.items} />
        )
    }
};

Modules.defaultProps = {
    caption: "公共组件",
    items: [
        {"link":"/module/api","title":"xx"},
        {"link":"/module/api","title":"yy"},
    ]
};

