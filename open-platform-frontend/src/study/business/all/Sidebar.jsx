import React, {Component} from "react";
import SidebarTemplate from './../../../common/SidebarTemplate'


export default class Sidebar extends Component {

    render() {
        var caption = [
            {"link":"all","name":"公司业务架构"},
            {"link":"mobile","name":"移动医疗事业部"},
            {"link":"yhis","name":"云HIS事业部"},
            {"link":"hrp","name":"HRP事业部"},
            {"link":"lot","name":"物联网事业部"},
            {"link":"edu","name":"护理教育事业部"},
            {"link":"hcrm","name":"HCRM事业部"},
            {"link":"one-card-pass","name":"一卡通事业部"},
            {"link":"cloud","name":"医疗云事业部"},
            {"link":"pay","name":"综合支付事业部"},
            {"link":"app","name":"APP事业部"},
            {"link":"hierarchical-medical","name":"分级诊疗事业部"},
            {"link":"insurance","name":"保险事业部"},
            {"link":"creative-center","name":"上海创新中心"},
            {"link":"supply","name":"飞医网"},
            {"link":"nursing","name":"趣护"},
        ];

        return (
            <SidebarTemplate title="产品手册" nav="business-overall" caption={caption} children={this.props.children} />
        )
    }
}


