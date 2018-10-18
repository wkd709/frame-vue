import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,NavLink ,Switch,Redirect } from "react-router-dom";
import routes from './router/index';

import './style/common/common.scss';
import Hello from './views/Hello';
import NoMatch from './views/404';
import Home from './views/home';
const RouteWithSubRoutes = (route) => {
    console.log(route);
    return (
        <Route path={route.path} 
            render={() => (
                location.pathname == '/' ?
                    <Redirect to='/Home'/>
                :
                <Route component={route.component}/>

                // route.computedMatch.isExact ? 
                //     <Route component={route.component}/>
                //     :
                //     <Route path='*' component={NoMatch} />
            )}
        />
    )
};

ReactDOM.render(
    <Router>
        <div>
            <Link to='/Home'>home</Link><br/>
            <Link to='/Hello'>Hello</Link>
            <Link to='/Hello/d'>Hello/d</Link>
            <Switch>
                {routes.map((item, i) => 
                    <RouteWithSubRoutes {...item} key={i}/>
                )}

                {/* <Route  path='/Home' component={Home} />
                <Route path='/Hello' component={Hello} />
                <Route path='/404' component={NoMatch} /> */}
                {/* <Redirect from='*' to='/404'/> */}
            </Switch>
        </div>
    </Router>, 
    document.getElementById('app')
);