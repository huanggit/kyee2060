import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'

export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"mapping","name":"映射&视图"},
            {"link":"data-binding","name":"数据绑定"},
            {"link":"advice","name":"切片管理"},
        ]
        return (
            <SidebarTemplate title="Spring MVC" nav="springMvc" caption={caption} children={this.props.children} />
        )
    }
}
