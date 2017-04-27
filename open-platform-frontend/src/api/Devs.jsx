import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Devs extends Component {



    render() {
        return (
            <EntryList  type="dev"
                        title="研发规范"
                        brief="编码规范，多系统对接规范，研发流程。切实提高代码质量，项目质量。"
            />
        )
    }
};