import React, {Component} from "react";
import RightMarkDown from '../../common/RightMarkDown';


export default class LoginTemplates extends Component {
    render() {
        return (
            <RightMarkDown source={['## 登录页面模板',
                '京颐集团B端产品管理后台网站登录页面推荐模板。',
                '***',
                '### 模板1',
                '\n![模板1](/static/images/login11.jpg)\n',
                '\n[点击查看高保真图](/static/images/login1.jpg)\n',

                '***',
                '### 模板2',
                '\n![模板2](/static/images/login22.jpg)\n',
                '\n[点击查看高保真图](/static/images/login2.jpg)\n',

                '***',
                '### 模板3',
                '\n![模板3](/static/images/login33.jpg)\n',
                '\n[点击查看高保真图](/static/images/login3.jpg)\n',

                '***',
                '### 模板4',
                '\n![模板4](/static/images/login44.jpg)\n',
                '\n[点击查看高保真图](/static/images/login4.jpg)\n',

                '***',
                '### 模板5',
                '\n![模板5](/static/images/login55.jpg)\n',
                '\n[点击查看高保真图](/static/images/login5.jpg)\n',

                '***',
                '### 模板6',
                '\n![模板6](/static/images/login66.jpg)\n',
                '\n[点击查看高保真图](/static/images/login6.jpg)\n',
            ]}/>
        );
    }
}

