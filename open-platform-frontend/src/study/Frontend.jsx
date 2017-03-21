import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Frontend extends Component {



    render() {
        return (
            <EntryList  type="frontend"
                        title="前端技术"
                        brief="从基础的CSS+Javascript，到SASS+React，浏览器开发者工具，前端技术一网打尽。"
            />
        )
    }
};
