import React from 'react';
import '../../style/user.scss';
import { NavLink } from "react-router-dom";

import Share from '../../components/common/share';

class userIndex extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
        data: [
            '/static/images/home/15360287056698622_64925705.jpg',
            '/static/images/home/15397391756657080_200330784.jpg'
        ],
        works: [
            {
                vote: 133,
                browse: 7167,
                comment:7,
                total: 7,
                img: '/static/images/user/15431603272968475_200766922_W960.jpg',
            },
            {
                vote: 9,
                browse: 333,
                comment: 0,
                total: 1,
                img: '/static/images/user/15431599343759334_200766922_W960.jpg',
            }
        ],
        isExpand: false,//是否展开
        isShare: false,
      }
    }
    render() {
        return (
            <div className='user-box'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{location.href='/'}}></i>
                    个人主页
                    <span className='share iconfont icon-plus-share' onClick={()=>this.setState({isShare:!this.state.isShare})}></span>
                </div>
                <div className='intr'>
                    <div className="intr-txt">
                        <NavLink to='/user/Personal'>
                            <div className="img"><i className="iconfont icon-user"></i></div>
                        </NavLink>
                        <p className='name'>17605887095</p>
                        <p className='signature'>还没有留下个性签名</p>
                        <div className="attention">
                            <span>关注 2</span>
                            <span className='last'>粉丝 1</span>
                            <div className="btn-upload">上传作品</div>
                        </div>
                    </div>
                </div>
                <ul className='menu-nav'>
                    <li>作品<i></i></li>
                    <li><NavLink to='/user/honor'>头衔<i></i></NavLink></li>
                    <li onClick={()=>this.setState({isExpand:!this.state.isExpand})}>
                        <span className={'iconfont '+ (!this.state.isExpand? 'icon-tuozhuaicaidandaohang' : "icon-menu2")}></span>
                        <i></i>
                    </li>
                </ul>
                <div className='works'>
                    <div className='photo-box'>
                        {
                            !this.state.isExpand ?
                                (
                                    this.state.works.map((item, index) => (
                                        <div className='abbrev-item' key={index}>
                                            <a href="">
                                                <img src={item.img} alt=""/>
                                            </a>
                                        </div>
                                    ))
                                )
                                :
                                (
                                    this.state.works.map((item,index)=>(
                                        <div className='photo-item' key={index}>
                                            <div className='img'>
                                                <a href="">
                                                    <img src={item.img} alt=""/>
                                                    <span className='total'>{item.total}</span>
                                                </a>
                                            </div>
                                            <p className='title'>秋天的银杏</p>
                                            <p className='detail'>秋天最美的景色</p>
                                            <div className='share-bottom'>
                                        <span className='vote'>
                                            <i className='iconfont icon-dianzan'></i>{item.vote}个投票
                                        </span>
                                                <span className='browse'>
                                            <i className='iconfont icon-weibiaoti4'></i>{item.browse}次浏览
                                        </span>
                                                <span className='comment'>
                                            <i className='iconfont icon-pinglun'></i>{item.comment}个评论
                                        </span>
                                            </div>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                </div>
                <div className='end'>
                    <span className='line'></span>
                    <span className='txt'>THE END</span>
                    <span className='line'></span>
                </div>
                <Share isShare={this.state.isShare}/>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default userIndex;