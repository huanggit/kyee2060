import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Modules extends Component {



    render() {
        return (
            <EntryList  type="modules"
                        title="公共组件"
                        brief="提供详细的组件使用文档，包括组件简介、组件详细API参考文档、组件升级日志等。"
            />
        )
    }
};