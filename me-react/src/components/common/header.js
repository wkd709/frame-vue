import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import actions from '../../redux/actions/leftMenuAction';
import {connect} from 'react-redux';

import '../../style/common/header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerObj: this.props.data, //rightType  1 作品 / 2 图片
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
            </div> 
        )
    }

    onOpenChange(){
        this.props.left_menu_show(true);
    }
    rightFunc() {
        let obj = {
            isShow: true,
            name: '分类'
        }
        this.props.onMenuClick(obj);
    }
}
export default connect(
    state=>state,
    actions
)(Header);