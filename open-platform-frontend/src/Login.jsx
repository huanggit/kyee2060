import React, {Component} from "react"
import {Link} from 'react-router';
import CryptoJS from 'crypto-js' ;

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRememberPassword: (localStorage.getItem("isRememberPassword") == 'true'),
            error: false,
            loading: false
        }
        this.rememberPassword = this.rememberPassword.bind(this);
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

    handleCheckboxChange(event) {
        var isChecked = event.target.checked;
        this.setState({
            isRememberPassword:isChecked
        });
        localStorage.setItem("isRememberPassword", isChecked);
        this.rememberPassword();
    }

    rememberPassword(){
        var isChecked = (localStorage.getItem("isRememberPassword") == 'true');
        if(isChecked){
            var encrypted = CryptoJS.AES.encrypt(
                this.refs.password.value,
                "125");
            localStorage.setItem("userName", this.refs.userName.value);
            localStorage.setItem("password", encrypted);
        }else {
            localStorage.removeItem("userName");
            localStorage.removeItem("password");
        }
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
                                        <input ref={"userName"} defaultValue={localStorage.getItem("userName")}
                                               onBlur={this.rememberPassword}
                                               type="text" name="userName" placeholder="请输入工号" autofocus required/>
                                    </div>
                                    <div className="inputWrap">
                                        <input ref={"password"} onBlur={this.rememberPassword}
                                               defaultValue={localStorage.getItem("password")==null?"":
                                                   CryptoJS.AES.decrypt(localStorage.getItem("password"),"125").toString(CryptoJS.enc.Utf8)}
                                               type="password" name="password" placeholder="请输入密码" required/>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <input type="checkbox"
                                           onChange={this.handleCheckboxChange.bind(this)}
                                           checked={this.state.isRememberPassword}/>
                                    <span>记住密码</span>
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
