import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'


export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"speed","name":"提高编程速度"},
            {"link":"solve","name":"定位解决问题"},
            // {"link":"design-pattern","name":"设计模式"},
        ]
        return (
            <SidebarTemplate title="基础技能" nav="basic" caption={caption} children={this.props.children} />
        )
    }
}

