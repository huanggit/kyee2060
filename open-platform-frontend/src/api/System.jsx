import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Sys extends Component {



    render() {
        return (
            <EntryList  type="sys"
                        title="公共系统"
                        brief="公司公共系统。"
            />
        )
    }
};