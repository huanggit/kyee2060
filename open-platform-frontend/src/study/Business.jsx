import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Business extends Component {



    render() {
        return (
            <EntryList  type="business"
                        title="业务学习"
                        brief="医疗行业有哪些细分市场？公司几十个项目组都在做什么？要想代码写的好，业务知识要学好。"
            />
        )
    }
};


