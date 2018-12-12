import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

import actions from '../../redux/actions/leftMenuAction';
import isLogin from '../../redux/actions/isLogin';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    render() {
        return (
            <div>
                <div className={'left-show-box '+(this.props.left.open ? "open": "")} ref='layerOpen'>
                    <div className={this.props.left.open ? "layer": ""} onClick={this.onOpenChange}></div>
                    <div className={'menu '+(this.props.left.open ? "open": "")}>
                        <div className='content'>
                            <div className='menu-img' onClick={this.goUser.bind(this)}>
                                <div className='img'>
                                    <img src="/static/images/user.png"/>
                                </div>
                                {
                                    this.props.isLogin.user ? 
                                    (<span className='name'>{this.props.isLogin.user}</span>)
                                    :
                                    (<NavLink className='text' to='/login'>登录/注册</NavLink>)
                                }
                            </div>
                            <ul className='menu-ul' onClick={this.onOpenChange}>
                                <NavLink to='/'><li className='sy'><i></i> 首页</li></NavLink>
                                <NavLink to='/works/Recommend'><li className='zp'><i></i> 作品</li></NavLink>
                                <a href=""><li className='tpgc'><i></i> 图片广场</li></a>
                                <a href=""><li className='syjq'><i></i> 摄影技巧</li></a>
                                <a href=""><li className='dh'><i></i> 对话</li></a>
                                <a href=""><li className='jxjq'><i></i> 极限摄影</li></a>
                            </ul>
                            {
                                this.props.isLogin.user ? 
                                
                                (<div className='Logout' onClick={this.LogoutFun.bind(this)}>
                                    <i className='iconfont icon-zhuxiao'></i>
                                    <span>注销</span>
                                </div>)
                                : 
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
    componentDidMount() {//方法在将组件输出呈现给DOM后运行
        this.props.left_menu_show(false);
    }
    goUser() {//进入个人中心
        if (!this.props.isLogin.user) {
            return;
        }
        window.location.href='/user/index';
    }
    LogoutFun() {//退出退出登录
        this.props.LoginFun('');
        window.location.href='/';
    }
    onOpenChange(){
        this.props.left_menu_show(false);
    }
}
export default connect(
    state=>state,
    {
        left_menu_show:actions.left_menu_show,
        LoginFun: isLogin.LoginFun
    }
)(LeftMenu);