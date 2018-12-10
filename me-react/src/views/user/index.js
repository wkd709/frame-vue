import React from 'react';
import '../../style/user.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";


class userIndex extends React.Component {
    constructor(props) {
       super(props);
    }
    handleClick() {
       
    }
    render() {
        return (
            <div className='user-box'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{history.go(-1)}}></i>
                    个人主页
                    <span className='share iconfont icon-plus-share'></span>
                </div>
            </div>
        );
    }
}

export default userIndex;