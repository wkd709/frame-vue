import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,NavLink ,Switch,Redirect } from "react-router-dom";
import './style/common/common.scss';

//views
import Hello from './views/Hello';
import NoMatch from './views/404';
import Home from './views/home';
import works from './views/works';
import Login from './views/login';
import Reg from './views/reg';
import userIndex from './views/user/index';
import honor from './views/user/honor';

import Recommend from './views/works/Recommend';
import Popularity from './views/works/Popularity';
import Newest from './views/works/Newest';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers/index'

let store = createStore(reducers);
var user = store.getState().isLogin.user;//判断是否已登录状态
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='app'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Hello' component={Hello} />
                    <Route path='/works' component={works} />
                    <Route path='/login' component={Login} />
                    <Route path='/Reg' component={Reg} />
                    {user ? (<Route path='/user/index' component={userIndex}/>):''}
                    {user ? (<Route path='/user/honor' component={honor} />):''}
                    <Route path='/404' component={NoMatch} />
                    <Redirect from='*' to='/404'/>
                </Switch>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);