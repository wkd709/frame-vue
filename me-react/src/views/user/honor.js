import React from 'react';
import '../../style/user.scss';

import Share from '../../components/common/share';
class Honor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShare: false,
        }
    }
    render() {
        return (
            <div className='user-box user-Honor'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{history.go(-1)}}></i>
                    个人荣誉
                    <span className='share iconfont icon-plus-share' onClick={()=>this.setState({isShare:!this.state.isShare})}></span>
                </div>
                <div className='intr-honor'>
                    <div className="img">
                        <i className='iconfont icon-user'></i>
                    </div>
                    <div className='content'>
                        <h2>17605887095</h2>
                        <div className='sore'>
                            <span className='first'>积分：36</span>
                            <span>等级：摄影乐园一级</span>
                        </div>
                    </div>
                </div>
                <div className="medal-title">POCO勋章</div>
                <div  className='medal-box'>
                    <div className="item-medal">
                        <img src="/static/images/user/15163461001048203_178536587.png" alt=""/>
                        <span>x1</span>
                    </div>
                </div>
                <Share isShare={this.state.isShare}/>
            </div>
        );
    }
}

export default Honor;