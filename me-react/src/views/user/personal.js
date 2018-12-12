import React from 'react';
import '../../style/user.scss';
import '../../tools/hammer.min.js';


import CityChange from '../../components/common/cityChange';

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMore: false,
            openCity: false,
            formData:  {
                provinceId: 0,
                cityId: 0,
                areaId:0,
            },
            cityName: '',
        }
    }
    render() {
        return (
            <div className='user-box user-personal'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={()=>{history.go(-1)}}></i>
                    编辑个人资料
                </div>
                <div className='list-per'>
                    <div className='item-per'>
                    头像
                    <span className='iconfont icon-iconfontjiantou2'></span>
                    <span className='img'><i className='iconfont icon-user'></i></span>
                    </div>
                    <div className='item-per'>
                        封面图
                        <span className='iconfont icon-iconfontjiantou2'></span>
                    </div>
                </div>
                <div className='list-per'>
                    <div className='item-per'>
                        昵称
                        <span className='iconfont icon-iconfontjiantou2'></span>
                    </div>
                    <div className='item-per'>
                        POCO号
                        <span className='txt'>200766922</span>
                    </div>
                    <div className='item-per'>
                        性别
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>女</span>
                    </div>
                    <div className='item-per'>
                        出生日期
                        <span className='iconfont icon-iconfontjiantou2'></span>
                    </div>
                    <div className='item-per' onClick={()=>this.setState({openCity:true})}>
                        地区
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>{this.state.cityName}</span>
                    </div>
                    <div className='item-per more' onClick={()=>this.setState({isMore:!this.state.isMore})}>
                        更多
                        <span className={'iconfont '+(!this.state.isMore?'icon-xiajiantou':'icon-shangjiantou')}></span>
                    </div>
                    {
                        this.state.isMore ?
                        (
                            <div>
                                <div className='item-per'>
                                    联系电话
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                </div>
                                <div className='item-per'>
                                    联系邮箱
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                </div>
                                <div className='item-per'>
                                    联系QQ
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                </div>
                            </div>
                        )
                        :''
                    }
                </div>
                <CityChange getCity={this.getCity.bind(this)} openCity={this.state.openCity}/>
            </div>
        );
    }
    componentDidMount() {
    }

    getCity(val) {
        this.state.openCity = val.open;
        this.state.formData.provinceId = val.id.provinceId;
        this.state.formData.cityId = val.id.cityId;
        this.state.formData.areaId = val.id.areaId;
        this.state.cityName = val.cityName;
       
        this.setState({
            formData: this.state.formData,
            cityName: this.state.cityName
        });
    }
    

}

export default Personal;