import React from 'react';
import { BrowserRouter as Router, Route, Link,NavLink ,Switch,Redirect } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='nav'>
          <ul>
            <li><NavLink exact to='/'>home</NavLink></li>
            <li><NavLink to='/Hello'>Hello</NavLink></li>
            <li><NavLink to='/Hello/d'>Hello/d</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default home;
