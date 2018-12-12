import React from 'react';
import '../../style/user.scss';
import '../../tools/hammer.min.js';
import * as tools from '../../tools/public.js';

import CityChange from '../../components/common/cityChange';

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMore: false,
            openCity: false,
            formData: {
                provinceId: 439,
                cityId: 467,
                areaId: 471,
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
                <CityChange getCity={this.getCity.bind(this)} obj={{openCity:this.state.openCity,cityId:this.state.formData}}/>
            </div>
        );
    }
    componentDidMount() {
        if (this.state.formData.provinceId!=0) {

            this.state.cityName = tools.cityName(this.state.formData.provinceId)
                        + ' ' + tools.cityName(this.state.formData.cityId)
                        + ' ' + tools.cityName(this.state.formData.areaId);
        }
        this.setState({'cityName':this.state.cityName});
    }

    getCity(val) {//接收数据
        this.state.openCity = val.open;
        this.state.formData.provinceId = val.id.provinceId;
        this.state.formData.cityId = val.id.cityId;
        this.state.formData.areaId = val.id.areaId;
        this.state.cityName = val.cityName;
       
        this.setState({
            formData: this.state.formData,
            cityName: this.state.cityName
        });
        console.log(this.state);
    }
}

export default Personal;