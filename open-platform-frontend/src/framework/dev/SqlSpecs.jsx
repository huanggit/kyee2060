import React, {Component} from "react";
import RightMarkDown from '../../common/RightMarkDown';


export default class SqlSpecs extends Component {
    render() {
        return (
            <RightMarkDown source={['## 环境&中间件&DB',
                '***',
                '#### 关系型数据库',
                '* MySQL | 版本： 5.6, 5.7 | 优先使用阿里云服务 ',
                '* Oracle | 版本： 11 | 仅院端系统可采用 ',
                '* PPAS | 版本： 9.3 ',

                '***',
                '#### NoSQL',
                '* Redis 阿里云服务',
                '* MongoDB 阿里云服务',

                '***',
                '#### 操作系统',
                '* centos | 版本：7.2 64位 | 云端项目统一使用 centos',
                '* windows server | 版本：2008 64位 | 院端项目可采用 windows',

                '***',
                '#### 容器服务',
                '* docker 鉴于 oracle jdk 版权原因，docker 中统一使用 open jdk 版本',

                '***',
                '#### JDK',
                '* oracle jdk 版本：8u121',

                '***',
                '#### servlet容器',
                '* Tomcat | 版本：8',

                '***',
                '#### HTTP服务器',
                '* nginx | 版本：1.10.3',
                '* tengine | 版本：2.1.2',
                '* apache http server | 版本：2.4.25',

                '***',
                '#### 代理服务器',
                '* squid | 版本：3.5.24',

                '***',
                '#### 消息队列',
                '* rabbitMQ | 版本：3.6.6',
                '* Kafka | 版本：0.10.1.1',
                '* emqttd | 版本：2.0.7',
                '* 阿里云消息服务',

                '***',
                '#### 搜索引擎',
                '* elasticsearch | 版本：5.2.0',
            ]}/>
        );
    }
}

