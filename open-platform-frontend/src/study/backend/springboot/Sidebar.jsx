import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'

export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"quick-start","name":"快速开始"},
        ]
        return (
            <SidebarTemplate title="Spring Boot" nav="springBoot" caption={caption} children={this.props.children} />
        )
    }
}
