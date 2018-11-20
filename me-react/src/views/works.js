import React from 'react';
import '../style/hello.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/works.scss';

//component
import Header from '../component/common/header';

//views
import Recommend from './works/Recommend';
import Popularity from './works/Popularity';
import Newest from './works/Newest';

//json 数据
import  get_works_rank_category from '../fetch/data/get_works_rank_category.json';

class works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rightOpen: false,
            rightName: '',
            classifyList: []
        };
    }
   
    render() {
        let headerData = {
            name:'作品',
            rightType: 1,// 1 作品 / 2 图片
            leftType: 1,
        }
        return (
            <div className='works page-layout'>
                {/*  内容页 */}
                <Header data={headerData}  onMenuClick={this.onMenuClick.bind(this)}/> 
                <div className={'page '+(this.state.rightOpen ? 'none' : '')}>
                    <div className='subNav'>
                        <li ><NavLink exact to='/works/Recommend'>推荐</NavLink></li>
                        <li><NavLink to='/works/Popularity'>人气</NavLink></li>
                        <li><NavLink to='/works/Newest'>最新</NavLink></li>
                    </div>
                    <Switch>
                        <Route exact path='/works/Recommend' component={Recommend} />
                        <Route path='/works/Popularity' component={Popularity} />
                        <Route path='/works/Newest' component={Newest} />
                    </Switch>
                </div>
                {/* 分类 */}
                <div className={'classify '+(this.state.rightOpen ? 'yes' : '')}>
                    {
                        this.state.rightOpen ? 
                            <div>
                                <div className='title'>
                                    <i className='iconfont icon-zuojiantou' onClick={()=>(this.setState({rightOpen:false}))}></i>
                                    分类
                                </div>
                                <ul className='list-ul'>
                                    {
                                        this.state.classifyList.map((key,index) => (
                                            <NavLink to='' key={index}>
                                                <li style={{backgroundImage:"url("+key.img+")"}}>
                                                    <dl>
                                                        <dt>{key.category_name}</dt>
                                                        <dt className='second'>{key.desc}</dt>
                                                    </dl>
                                                </li>
                                            </NavLink>
                                        ))
                                    }
                                </ul>
                            </div>
                        : ''
                    }
                </div>
            </div>
        );
    }

    onMenuClick(obj) {
        this.setState({
            rightOpen: obj.isShow,
            rightName: obj.name,
        });
    }
    componentDidMount() {//方法在将组件输出呈现给DOM后运行
        this.getData();
    }
    componentWillUnmount() {

    }

    getData() {
        this.setState({'classifyList':get_works_rank_category.data});
    }

}

export default works;