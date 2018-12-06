import React from 'react';
import '../style/hello.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import Test from '../container/test';

class Toggle extends React.Component {
    constructor(props) {
       super(props);
    }
    handleClick() {
       
    }
    render() {
        return (
            <div className='Hello'>
                <Test/>
            </div>
        );
    }
}

export default Toggle;