import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import '../style/home.scss';

import * as api from '../fetch/api.js';

//component
import Header from '../component/common/header';


//json 数据
import  get_wap_homepage_info from '../fetch/data/get_wap_homepage_info.json';

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  render() {
    let headerData = {
      name:'摄影',
      rightType: 0,
      leftType: 1,
    }
    return (
      <div>
        <Header data={headerData}/>
        <div className='banner'>
          <div className='banner-content'>
            <a href="">
              <img src="/static/images/home/15422512312757708_200330784.jpg" alt="图片"/>
            </a>
          </div>
        </div>
        <div className='nav'>
          <ul>
          <li>
              <NavLink to='/works'>
                <img className='img' src='/static/images/home/icon_work.png'/>
                <p>作品</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <img className='img' src='/static/images/home/icon_pic.png'/>
                <p>图片</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Hello/d'>
                <img className='img' src='/static/images/home/icon_skill.png'/>
                <p>技巧</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='md1'>
          <div className='title'>热门推荐</div>
          <div className='list-wrap'>
            <ul className='list'>
              {
                this.state.data.skill ? 
                this.state.data.skill.map((item,index) => (
                  <li key={index}>
                    <a href="">
                      <div className="img">
                        <img src={item.img} alt={item.title}/>
                      </div>
                      <div className='content'>
                        {item.title}
                      </div>
                    </a>
                  </li>
                ))
                :
                ''
              }
            </ul>
          </div>
        </div>
        <div className='md2'>
          <div className='title'>热门摄影师</div>
          <div className='list-wrap'>
            {
              this.state.data.favourite_recommend ? 
              this.state.data.favourite_recommend.map((element,index) => (
                <div className='item' key={index}>
                  <div className='author'>
                    <a href="">
                      <img src={element.img} alt=""/>
                      <div className='name-title'>
                        <span className='name'>{element.title} 
                          {element.sign == 1 ? <i className='iconfont icon-icon1'></i> : ''}
                        </span>
                        <span className='describe'>{element.desc}</span>
                      </div>
                    </a>
                  </div>
                  <div className="list">
                    <ul>
                      {
                        element.items.map((key,ind) => (
                          <a href="" key={ind}>
                            <li>
                              <img src={key.img} alt=""/>
                            </li>
                          </a>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))
              :
              ""
            }
          </div>
        </div>
        {/* <div className='md3'>
          <div className='title'>勋章作品</div>
          <div className='list'>
            {
              [1,2,3,4].map((key)=>(
                <a href="" key={key}>
                  <img src="http://img1001.pocoimg.cn/image/poco/works/14/2018/1115/11/15422521326560118_174730832_S360.jpg" alt=""/>
                </a>
              ))
            }
          </div>
        </div> */}
      </div>
    );
  }

  componentDidMount() {
    this.getData();
  }
  
  getData() {
    this.setState({'data':get_wap_homepage_info.data});
  }
}
export default home;