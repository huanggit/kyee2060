import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Services extends Component {


    render() {
        return (
            <Grid caption={this.props.caption} items={this.props.items} />
        )
    }
};

Services.defaultProps = {
    caption: "",
    items: []
};

