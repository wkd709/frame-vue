import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/login.scss';

import Prompt from '../components/common/prompt';
import actions from '../redux/actions/promptActions';
import isLogin from '../redux/actions/isLogin';
import {connect} from 'react-redux';

class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeText: '获取验证码',
            timer: '',
            number: 60,
            isSend:true,//是否可点击 获取验证码按钮
            formData: {
                phone: '',
                code: '',
                psd: ''
            }
        }
    }

    render() {
        return (
            <div className='reg'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{history.go(-1)}}></i>
                    注册
                    <NavLink to='/login'>登录</NavLink>
                </div>
                <div className='form'>
                    <div className='input-flex'>
                        <span className='cc_area'>+86</span>
                        <input type="number" placeholder='手机号' name="user" className='input-phone' 
                            onChange={e => this.setState({formData:Object.assign({},this.state.formData,{ phone: e.target.value})})}/>
                    </div>
                    <div className='input-flex'>
                        <input type="number" placeholder='短信验证码' name="code" className='input-code' 
                            onChange={e => this.setState({formData:Object.assign({},this.state.formData,{ code: e.target.value})})}/>
                        <span className={'cc_code '+(this.state.isSend ? 'blue' : '')} onClick={this.sendCode.bind(this)}>{this.state.codeText}</span>
                    </div>
                    <div className='input-flex'>
                        <input type="password" placeholder='请输入密码(6-32位非空字符)' name="password" className='password'
                            onChange={e => this.setState({formData:Object.assign({},this.state.formData,{ psd: e.target.value})})}/>
                    </div>
                    <div className='btn-form' onClick={this.register.bind(this)}>注册</div>
                    <div className='help'>
                        点击上面的“注册”按钮，即代表你已同意
                        <a href="javascript:void(0)">《POCO摄影用户许可协议》</a>
                    </div>
                </div>
                <Prompt/>
            </div>
        );
    }
    sendCode() {//发送验证码
        var self = this;
        // 手机号判断
        var reg=/^1[345678]\d{9}$/;
        if(!reg.test(this.state.formData.phone)){
            this.props.promptFun('请输入正确的手机号');
            return false;
        }

        if(this.state.isSend) {
            this.state.timer = setInterval(() => {
                if (self.state.number==0) {
                    self.setState({'codeText':'获取验证码'});
                    self.setState({number:60});
                    self.setState({isSend:true});
                    clearInterval(self.state.timer);
                } else {
                    self.setState({isSend:false});
                    self.setState({'codeText':self.state.number+'s后重新发送'});
                    self.state.number--;
                    self.setState({number: self.state.number});
                }
            }, 1000);
        }
    }

    register() {//注册
        // 手机号判断
        var reg=/^1[345678]\d{9}$/;
        if(!reg.test(this.state.formData.phone)){
            this.props.promptFun('请输入正确的手机号');
            return false;
        }
        if(!this.state.formData.code||this.state.formData.code.length!=4){
            this.props.promptFun('验证码为4位数字');
            return false;
        }
        if(!this.state.formData.psd||this.state.formData.psd.length<4){
            this.props.promptFun('密码长度最小4位');
            return false;
        }
        this.props.LoginFun(this.state.formData.phone);
        window.location.href='/user/index';
    }
}
export default connect(
    state=>state,
    {
        promptFun:actions.promptFun,
        LoginFun: isLogin.LoginFun
    }
)(Reg);