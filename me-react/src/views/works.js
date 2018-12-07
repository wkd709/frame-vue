import React from 'react';
import '../style/hello.scss';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/works.scss';

//component
import Header from '../components/common/header';
import LeftMenu from '../components/common/leftMenu';
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
        this.openRight = this.openRight.bind(this);
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
                <div className={'page '+(this.state.rightOpen ? 'none' : '')}>
                    <Header data={headerData}  onMenuClick={this.onMenuClick.bind(this)}/>
                    <div className='subNav'>
                        <NavLink exact to='/works/Recommend'><li>推荐</li></NavLink>
                        <NavLink to='/works/Popularity'><li>人气</li></NavLink>
                        <NavLink to='/works/Newest'><li>最新</li></NavLink>
                    </div>
                    <Switch>
                        <Route exact path='/works/Recommend' component={Recommend} />
                        <Route path='/works/Popularity' component={Popularity} />
                        <Route path='/works/Newest' component={Newest} />
                        <Redirect from='*' to='/works/Recommend'/>
                    </Switch>
                </div>
                {/* 分类 */}
                <div className={'classify '+(this.state.rightOpen ? 'yes' : '')} ref='classify'>
                    <div className='title'>
                        <i className='iconfont icon-zuojiantou' onClick={this.openRight}></i>
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
                <LeftMenu/>
            </div>
        );
    }
    openRight() {
        this.setState({rightOpen:false});
        let self = this;
        setTimeout(function() {
            self.setState({classifyList:[]});
        },400)
    }

    onMenuClick(obj) {
        this.getData();
        this.setState({
            rightOpen: obj.isShow,
            rightName: obj.name,
        });
    }
    componentDidMount() {//方法在将组件输出呈现给DOM后运行
    }
    componentWillUnmount() {
    }

    getData() {
        this.setState({'classifyList':get_works_rank_category.data});
    }

}

export default works;