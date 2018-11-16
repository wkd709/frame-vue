import React from 'react';
import '../style/hello.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/works.scss';

//component
import Header from '../component/common/header';

class works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true 
        };
    }

    render() {
        let headerData = {
            name:'作品',
            rightType: 1,// 1 作品 / 2 图片
            leftType: 1,
        }
        return (
            <div>
               <Header data={headerData}/>
               <div className='subNav'>
               </div>
            </div>
        );
    }
}

export default works;