import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Modules extends Component {


    render() {
        return (
            <Grid caption={this.props.caption}
                  items={this.props.items} />
        )
    }
};

Modules.defaultProps = {
    caption: "公共组件",
    items: [
        {"link":"/module/api","title":"权限管理"},
        {"link":"/module/api","title":"对称加密"},
        {"link":"/module/api","title":"非对称加密"},
        {"link":"/module/api","title":"网页消息推送"},
        {"link":"/module/api","title":"网页视频"},
        {"link":"/module/api","title":"IOS消息推送"},
        {"link":"/module/api","title":"Android消息推送"},
        {"link":"/module/api","title":"cordova视频插件"},
        {"link":"/module/api","title":"cordova通讯（IM）插件"},
        {"link":"/module/api","title":"cordova直播插件"},
        {"link":"/module/api","title":"后台分页组件"},
    ]
};

