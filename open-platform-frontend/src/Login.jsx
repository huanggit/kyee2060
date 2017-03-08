import React, {Component} from "react"
import {Link} from 'react-router';


export default class Login extends Component {
    render() {
        return (
            <div className="login_body">
                <div className="login_center">
                    <div className="logo_title"><span className="logo"></span>京颐学习分享平台</div>
                    <div className="wrap">
                        <form action="#" method="post">
                            <section className="loginForm">
                                <header><h1>登录</h1></header>
                                <div className="loginForm_content">
                                    <fieldset>
                                        <div className="inputWrap">
                                            <input type="text" name="userName" placeholder="邮箱/会员帐号/手机号" autofocus
                                                   required/>
                                        </div>
                                        <div className="inputWrap">
                                            <input type="password" name="password" placeholder="请输入密码" required/>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <input type="checkbox"/>
                                        <span>下次自动登录</span>
                                        <input type="submit" value="登录"/>
                                    </fieldset>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
