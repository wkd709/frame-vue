import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/login.scss';

class Reg extends React.Component {
    constructor(props) {
        super(props);
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
                        <input type="text" placeholder='手机号' name="user" className='input-phone'/>
                    </div>
                    <div className='input-flex'>
                        <input type="password" placeholder='短信验证码' name="code" className='input-code'/>
                        <span className='cc_code'>获取验证码</span>
                    </div>
                    <div className='input-flex'>
                        <input type="password" placeholder='请输入密码(6-32位非空字符)' name="password" className='password'/>
                    </div>
                    <div className='btn-form'>注册</div>
                    <div className='help'>
                        点击上面的“注册”按钮，即代表你已同意
                        <a href="javascript:void(0)">《POCO摄影用户许可协议》</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reg;