import React, {Component} from "react";
import Grid from "../common/Grid"

export default class Backend extends Component {


    render() {
        return (
            <Grid caption={this.props.caption}
                  items={this.props.items} />
        )
    }
};

Backend.defaultProps = {
    caption: "后端技术",
    items: [
        {"link":"/module/api","title":"Java & Jdk"},
        {"link":"/module/api","title":"Python"},
        {"link":"/module/api","title":"Spring Framework"},
        {"link":"/module/api","title":"Spring MVC"},
        {"link":"/module/api","title":"Spring Boot"},
        {"link":"/module/api","title":"Spring Cloud"},
        {"link":"/module/api","title":"Idea"},
        {"link":"/module/api","title":"Eclipse"},
        {"link":"/module/api","title":"Http & Tomcat"},
        {"link":"/module/api","title":"浏览器开发工具"},
        {"link":"/module/api","title":"Cache"},
        {"link":"/module/api","title":"MySql"},
    ]
};

