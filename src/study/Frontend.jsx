import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Frontend extends Component {


    render() {
        return (
            <Grid caption={this.props.caption}
                  items={this.props.items} />
        )
    }
};

Frontend.defaultProps = {
    caption: "前端技术",
    items: [
        {"link":"/module/api","title":"JavaScript"},
        {"link":"/module/api","title":"HTML"},
        {"link":"/module/api","title":"CSS"},
        {"link":"/module/api","title":"Bootstrap"},
        {"link":"/module/api","title":"jQuery"},
        {"link":"/module/api","title":"AngularJS"},
        {"link":"/module/api","title":"React"},
    ]
};

