import React, {Component} from "react";
import RightMarkDown from '../../common/RightMarkDown';


export default class Js extends Component {
    render() {
        return (
            <RightMarkDown source={['## 前端框架',
                '***',
                '#### JS框架',
                '* **jquery** | 版本：1.11.3',
                '* **angularJS** | 版本：2.x',
                '* **react** | 版本：16',

                '***',
                '#### UI组件',
                '* **extJS** | 版本：6.0',
                '* **bootstrap** | 版本：3.3.0',
                '* **dHtmlx** | 版本：4.x',

                '***',
                '#### 工具',
                '* **requireJS** | 版本：2.1.20 | 依赖工具',
                '* **kindeditor** | 版本：4.1.10 | 网页富文本编辑器',
                '* **crypto-js** | 版本：3.1.2 | 前端加密工具',
                '* **lodash** | 版本：4.17.4',

                '***',
                '#### APP',
                '* **ionic** | 版本：1.x,2.x',
                '* **angularjs** | 版本：1.x,2.x',
                '* **lodash** | 版本：4.17.4',
                '* **cordova** | 版本：6',
            ]}/>
        )
    }
}
