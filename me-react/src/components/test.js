import React, { Component } from 'react';
import actions from '../redux/actions/test';
import {connect} from 'react-redux';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind:0,
            list:[
                {name:'啥啊',completed: false}
            ]
        }
        this.add = this.add.bind(this);
        this.addTest = this.addTest.bind(this);
        this.toggleTest = this.toggleTest.bind(this);
        this.delTest = this.delTest.bind(this);
    }
   
    render(){
        return(
            <div>
                {/* redux 方法实现 */}
                <ul>
                    { this.props.test.lists.map((list,index) =>(
                        <li className={list.completed?"active":''} key={index}>
                            <span className='text' onClick={()=>this.props.toggle_todo(index) }>{list.text}</span>
                            <span className='del' onClick={()=>this.props.del_todo(index)}>×</span>
                        </li>
                    )) }
                </ul>   
                <div className='btn' onClick={this.add}>添加</div>
                
                {/* 使用 setState 方法实现 */}
                <div className='test-div'>
                    <ul>
                        { this.state.list.map((item,index) =>(
                            <li className={item.completed?"active":''} key={index}>
                                <span className='text' onClick={()=>this.toggleTest(index)}>{item.name}</span>
                                <span className='del' onClick={()=>this.delTest(index)} >×</span>
                            </li>
                        ))}
                    </ul>
                    <div className='btn' onClick={this.addTest}>添加</div>
                </div>
            </div>
        )
    }
    add(){
        this.state.ind++;
        this.setState({ind:this.state.ind});
        var obj = 'li'+this.state.ind;
        this.props.add_todo(obj);
    }


    addTest() {
        this.state.list.push({name:'wo',completed:false});
        this.setState({list:this.state.list});
    }
    toggleTest(index) {
        this.state.list.map((item,ind)=>{
            if (ind == index) {
                item.completed = true;
            } else {
                item.completed = false;
            }
        })
        this.setState({list:this.state.list});
    }
    delTest(index) {
        this.state.list.splice(index,1);
        this.setState({list:this.state.list});
    }

    componentDidMount() {//方法在将组件输出呈现给DOM后运行
    }
}
//connect() 接收四个参数，它们分别是 mapStateToProps ， mapDispatchToProps， mergeProps 和 options 。
//mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
//mapDispatchToProps(dispatch, ownProps): dispatchProps connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作为 props 绑定到 MyComp 上。
export default connect(
    state=>state,
    actions
)(Todos);