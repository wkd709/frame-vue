import React from 'react';
import '../style/hello.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;
import NoMatch from './404';
class Toggle extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.props);
        //   this.setState(state => ({
        //     isToggleOn: !state.isToggleOn
        //   }));
        this.props.history.push('/Home')
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                {/* <img src="/static/images/timg.jpg" alt=""/>*/}
                <ul>
                    <li><NavLink exact to='/Hello'>bus</NavLink></li>
                    <li><NavLink to='/Hello/cart'>cart</NavLink></li>
                </ul>
                <Route exact path='/Hello' component={Bus} />
                <Route path='/Hello/cart' component={Cart} />
                {/* { !this.props.match.isExact ? <Redirect to='/Hello'/> : '' } */}
            </div>
        );
    }
}

export default Toggle;