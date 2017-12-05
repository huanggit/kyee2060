import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Tech extends Component {



    render() {
        return (
            <EntryList  type="tech"
                        title="技术架构"
                        brief="公司研发环境，基础设施，支持工具，前后端框架，标准技术选型。"
            />
        )
    }
};