import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../../style/common/header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerObj: this.props.data, //rightType  1 作品 / 2 图片
            open: false,
        };
        this.onOpenChange = this.onOpenChange.bind(this);
        this.rightFunc = this.rightFunc.bind(this);
    }
    render() {
        return (
            <div className='headerBox'>
                <div className='header'>
                    {this.props.data.leftType ? <i className='iconfont icon-segi-icon-menu' onClick={this.onOpenChange}></i> : ''}
                    {this.props.data.name}
                    <div className='right' onClick={this.rightFunc}>{this.props.data.rightType == 1 ? '分类' : '' }</div>
                </div>
                <div className={'left-show-box '+(this.state.open ? "open": "")} ref='layerOpen'>
                    <div className={this.state.open ? "layer": ""} onClick={this.onOpenChange}></div>
                    <div className={'menu '+(this.state.open ? "open": "")}>
                        <div className='content'>
                            <div className='menu-img'>
                                <div className='img'>
                                    <img src="/static/images/user.png" alt="Image"/>
                                </div>
                                <div className='text'>登录/注册</div>
                            </div>
                            <ul className='menu-ul' onClick={this.onOpenChange}>
                                <NavLink to='/'><li className='sy'><i></i> 首页</li></NavLink>
                                <NavLink to='/works/Recommend'><li className='zp'><i></i> 作品</li></NavLink>
                                <a href=""><li className='tpgc'><i></i> 图片广场</li></a>
                                <a href=""><li className='syjq'><i></i> 摄影技巧</li></a>
                                <a href=""><li className='dh'><i></i> 对话</li></a>
                                <a href=""><li className='jxjq'><i></i> 极限摄影</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

    onOpenChange(){
        this.setState({ open: !this.state.open });
    }
    rightFunc() {
        let obj = {
            isShow: true,
            name: '分类'
        }
        this.props.onMenuClick(obj);
    }
}

export default Header;