import React, { Component } from 'react';
import actions from '../redux/actions/index';
import {connect} from 'react-redux';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind:0
        }
        console.log(props);
        this.add = this.add.bind(this);
    }
    add(){
        this.state.ind++;
        this.setState({ind:this.state.ind});
        var obj = 'li'+this.state.ind;
        this.props.add_todo(obj);
    }
    render(){
        return(
            <div>
                <ul>
                    { this.props.lists.map((list,index) =>(
                        <li className={list.completed?"active":''} key={index}>
                            <span className='text' onClick={()=>this.props.toggle_todo(index) }>{list.text}</span>
                            <span className='del' onClick={()=>this.props.del_todo(index)}>×</span>
                        </li>
                    )) }
                </ul>   
                <div className='btn' onClick={this.add}>添加</div>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(Todos);