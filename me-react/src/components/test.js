import React, { Component } from 'react';
import actions from '../redux/actions/test';
import {connect} from 'react-redux';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind:0
        }
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
                    { this.props.test.lists.map((list,index) =>(
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
//connect() 接收四个参数，它们分别是 mapStateToProps ， mapDispatchToProps， mergeProps 和 options 。
//mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
//mapDispatchToProps(dispatch, ownProps): dispatchProps connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作为 props 绑定到 MyComp 上。
export default connect(
    state=>state,
    actions
)(Todos);