import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Business extends Component {


    render() {
        return (
            <Grid caption={this.props.caption}
                  items={this.props.items} />
        )
    }
};

Business.defaultProps = {
    caption: "业务学习",
    items: [
        {"link":"/module/api","title":"HIS业务"},
        {"link":"/module/api","title":"趣医业务"},
    ]
};

