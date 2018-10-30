import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,NavLink ,Switch,Redirect } from "react-router-dom";
import './style/common/common.scss';

import routes from './router/index';

import Hello from './views/Hello';
import NoMatch from './views/404';
import Home from './views/home';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Hello' component={Hello} />
                <Route path='/404' component={NoMatch} /> 
                <Redirect from='*' to='/404'/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
);