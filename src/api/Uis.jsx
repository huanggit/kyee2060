import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Uis extends Component {


    render() {
        return (
            <Grid caption={this.props.caption} items={this.props.items} />
        )
    }
};

Uis.defaultProps = {
    caption: "",
    items: []
};

