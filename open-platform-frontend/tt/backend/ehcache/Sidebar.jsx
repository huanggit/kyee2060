import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'


export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"quick-start","name":"快速开始"},
        ]
        return (
            <SidebarTemplate title="EhCache缓存" nav="ehcache" caption={caption} children={this.props.children} />
        )
    }
}
