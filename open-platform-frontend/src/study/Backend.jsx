import React, {Component} from "react";
import EntryList from "../doc/EntryList";

export default class Backend extends Component {



    render() {
        return (
            <EntryList  type="backend"
                        title="后端技术"
                        brief="玩转IDE的各种黑科技，spring系列全攻略，缓存的N种用法，优化SQL的正确姿势，进阶JAVA8。"
            />
        )
    }
};
