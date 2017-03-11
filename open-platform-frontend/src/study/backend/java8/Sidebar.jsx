import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'

export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"interface-default","name":"接口默认方法"},
            {"link":"date-time","name":"日期时间类"},
            {"link":"lambda","name":"Lambda表达式"},
            {"link":"stream","name":"Stream"},
        ]
        return (
            <SidebarTemplate title="Java8" nav="java8" caption={caption} children={this.props.children} />
        )
    }
}

