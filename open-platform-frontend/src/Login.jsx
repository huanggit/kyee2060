import React, {Component} from "react"
import {Link} from 'react-router';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false
        }
    }

    login(){
        this.setState({
            loading: true,
            error: false
        })
        let formData = new FormData();
        formData.append("userName",this.refs.userName.value);
        formData.append("password",this.refs.password.value);
        global.post("doLogin", formData, function (result) {
            if (result) {
                var url = window.location.href;
                var subUrl = url.substr(0,url.indexOf('#'));
                window.location.href = subUrl;
            }else {
                this.setState({
                    loading: false,
                    error: true
                })
            }
        }.bind(this));
    }

    render() {
        return (
            <div className="login_body">
                <div className="login_center">
                    <div className="logo_title"><span className="logo"></span>京颐知识共享平台</div>
                    <div className="wrap">
                        <section className="loginForm">
                            <header><h1>登录</h1></header>
                            <div className="loginForm_content">
                                <fieldset>
                                    <div className="inputWrap">
                                        <input ref={"userName"} type="text" name="userName" placeholder="请输入工号" autofocus required/>
                                    </div>
                                    <div className="inputWrap">
                                        <input ref={"password"} type="password" name="password" placeholder="请输入密码" required/>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <input type="checkbox"/>
                                    <span>下次自动登录</span>
                                    <input type="submit" value="登录" onClick={this.login.bind(this)}/>
                                    {this.state.loading && (
                                        <p className="loginLoading">登录中...请稍候...</p>
                                    )}
                                    {this.state.error && (
                                        <p className="loginError">用户名或密码错误</p>
                                    )}
                                </fieldset>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
