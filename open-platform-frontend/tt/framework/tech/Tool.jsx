import React, {Component} from "react";
import RightMarkDown from '../../common/RightMarkDown';

export default class Tool extends Component {
    render() {
        return (
            <RightMarkDown source={['## 语言&工具',
                '***',
                '#### 语言',
                '* **后端：**java8 & python',
                '* **前端：**javascript & typescript',

                '***',
                '#### 版本管理',
                '* svn / git',

                '***',
                '#### 构建工具',
                '* **后端：**maven',
                '* **前端：**grunt / gulp /webpack',

                '***',
                '#### IDE',
                '* **后端：**IDEA / Eclipse',
                '* **前端：**WebStorm',
            ]}/>

        )
    }
}
