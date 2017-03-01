import React, {Component} from "react";
import RightMarkDown from '../../common/RightMarkDown';


export default class QuickStart extends Component {
    render() {
        return (
            <RightMarkDown source={['## 快速搭建',
                '***',
                '#### 公司maven私服',
                '* windows在 *C:\\用户\\xxx\\.m2\\settings.xml* 文件里',
                '* linux在 *~/.m2/settings.xml* 文件里',
                '```xml',
                '<mirrors>',
                '\t<mirror>',
                '\t\t<id>nexus</id>',
                '\t\t<mirrorOf>*</mirrorOf>',
                '\t\t<url>http://nexus.kyeegroup.com/content/groups/public/</url>',
                '\t</mirror>',
                '</mirrors>',
                '```',

                '***',
                '#### 快速开发 - SpringBoot+Mybatis+Thymeleaf',
                '* 快速搭建一个web项目+数据库+页面模板引擎',
                '* 下载包地址：xxxxxx',

                '***',
                '#### 快速开发 - SpringBoot+Mybatis+Scheduling',
                '* 快速搭建一个定时任务项目+数据库',
                '* 下载包地址：xxxxxx',

            ]}/>
        )
    }
}

