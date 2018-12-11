import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/login.scss';

import Prompt from '../components/common/prompt';
import actions from '../redux/actions/promptActions';
import isLogin from '../redux/actions/isLogin';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            psd: '',
        };
        this.formYes = this.formYes.bind(this);
    }

    render() {
        return (
            <div className='login'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{history.go(-1)}}></i>
                    登录
                    <NavLink to='/reg'>注册</NavLink>
                </div>
                <div className='form'>
                    <div className='input-flex'>
                        <input type="text" placeholder='Email/POCO号/手机' name="user" onChange={e => this.setState({ user: e.target.value })}/>
                    </div>
                    <div className='input-flex'>
                        <input type="password" placeholder='密码' name="password" onChange={e => this.setState({ psd: e.target.value })}/>
                    </div>
                    <div className='btn-form'  onClick={()=>this.formYes()}>登录</div>
                </div>

                <Prompt/>
            </div>
        );
    }

    formYes() {
        var self = this;
        // 手机号判断
        var reg=/^1[345678]\d{9}$/;
        if(!reg.test(this.state.user)){
            this.props.promptFun('请输入正确的手机号');
            return false;
        }

        if(!this.state.psd){
            this.props.promptFun('请输入密码');
            return false;
        }
        if(this.state.psd.length<4){
            this.props.promptFun('密码长度最小4位');
            return false;
        }

        this.props.LoginFun(this.state.user);
        window.location.href='/user/index';
    }
}
export default connect(
    state=>state,
    {
        promptFun:actions.promptFun,
        LoginFun: isLogin.LoginFun
    }
)(Login);