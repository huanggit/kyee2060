import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Services extends Component {


    render() {
        return (
            <Grid caption={this.props.caption} items={this.props.items} />
        )
    }
};

Services.defaultProps = {
    caption: "公共服务",
    items: [
        {"link":"/module/api","title":"登录+用户角色权限管理服务"},
        {"link":"/module/api","title":"短信发送服务"},
        {"link":"/module/api","title":"邮件发送服务"},
        {"link":"/module/api","title":"语音对接服务"},
        {"link":"/module/api","title":"IM对接服务"},
        {"link":"/module/api","title":"微信公众号对接服务"},
        {"link":"/module/api","title":"OSS对接服务"},
        {"link":"/module/api","title":"天气预报对接服务"},
    ]
};

