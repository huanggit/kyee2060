import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Services extends Component {



    render() {
        return (
            <EntryList  type="services"
                        title="公共服务"
                        brief="提供详细的公共服务使用文档，包括服务简介、服务详细API参考文档、服务升级日志等。"
            />
        )
    }
};