import React from 'react';
import '../../style/user.scss';
import '../../tools/hammer.min.js';
import * as tools from '../../tools/public.js';

import CityChange from '../../components/common/cityChange';
import DateChange from '../../components/common/dateChange';
import connect from "react-redux/es/connect/connect";
import actions from "../../redux/actions/promptActions";
import Prompt from "../../components/common/prompt";

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMore: false,//是否显示更多
            isEdited: false,
            openCity: false,//是否选择地区
            openDate: false,//是否选择日期
            isLayer: '',//sex 性别 / nickname 昵称 / phone 手机号 / email 邮箱  / QQ / signature 个性签名
            formData: {
                provinceId: 439,
                cityId: 467,
                areaId: 471,
                date: '2012-02-02',
                sex: 0,
                nickname: "111",
                phone: '',
                email: '',
                QQ: '',
                signature: ''
            },
            editObj: {
                sex: 0,
                nickname:"",
                phone: '',
                email: '',
                QQ: '',
                signature: ''
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
                    {
                        this.state.isEdited ?
                            (<span onClick={()=>this.saveFun.bind(this)}>保存</span>)
                            :''
                    }
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
                    <div className='item-per'
                         onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'nickname'}) : ''}>
                        昵称
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>{this.state.formData.nickname}</span>
                    </div>
                    <div className='item-per'
                         onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'signature'}) : ''}>
                        个人签名
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>{this.state.formData.signature}</span>
                    </div>
                    <div className='item-per'>
                        POCO号
                        <span className='txt'>200766922</span>
                    </div>
                    <div className='item-per'
                         onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'sex'}) : ''}>
                        性别
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>{this.state.formData.sex == 0 ? '女' : '男'}</span>
                    </div>
                    <div className='item-per'
                         onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({openDate:true}) : ''}>
                        出生日期
                        <span className='iconfont icon-iconfontjiantou2'></span>
                        <span>{this.state.formData.date}</span>
                    </div>
                    <div className='item-per'
                        onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({openCity:true}) : ''}>
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
                                <div className='item-per'
                                    onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'phone'}) : ''}>
                                    联系电话
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                    <span>{this.state.formData.phone}</span>
                                </div>
                                <div className='item-per'
                                    onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'email'}) : ''}>
                                    联系邮箱
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                    <span>{this.state.formData.email}</span>
                                </div>
                                <div className='item-per'
                                     onClick={()=>!this.state.openCity&&!this.state.openDate ? this.setState({isLayer:'QQ'}) : ''}>
                                    联系QQ
                                    <span className='iconfont icon-iconfontjiantou2'></span>
                                    <span>{this.state.formData.QQ}</span>
                                </div>
                            </div>
                        )
                        :''
                    }
                </div>
                {/* 地区组件 */}
                <CityChange getCity={this.getCity.bind(this)} obj={{openCity:this.state.openCity,cityId:this.state.formData}}/>
                {/* 年月日组件 */}
                <DateChange getDate={this.getDate.bind(this)} obj={{openDate:this.state.openDate,date:this.state.formData.date}}/>
                {
                    this.state.isLayer ? (
                        <div className='pop-up-layer'>
                            <div className='layer-content'>
                                {
                                    this.state.isLayer == 'sex' ?
                                        (
                                            <div className="sex-box">
                                                <h2>性别</h2>
                                                <div className={'sex-item '+(this.state.editObj.sex == 0 ? 'active':"")}
                                                     onClick={()=>this.setState({editObj: Object.assign({},this.state.editObj,{'sex': 0})})}>
                                                    <span className={'iconfont '+(this.state.editObj.sex == 0 ? 'icon-icradioture' :'icon-icradiofalse')}></span>女
                                                </div>
                                                <div className={'sex-item '+(this.state.editObj.sex == 1 ? 'active':"")}
                                                     onClick={()=>this.setState({editObj: Object.assign({},this.state.editObj,{'sex': 1})})}>
                                                    <span className={'iconfont '+(this.state.editObj.sex == 1 ? 'icon-icradioture' :'icon-icradiofalse')}></span>男
                                                </div>
                                            </div>
                                        )
                                    :
                                    this.state.isLayer == 'nickname' ?
                                        (
                                            <div className='nickname-box'>
                                                <h2>昵称</h2>
                                                <div className='form-input'>
                                                    <input type="text" placeholder='昵称'
                                                        defaultValue={this.state.formData.nickname}
                                                        onChange={
                                                            (e)=>this.setState({
                                                                editObj: Object.assign({},this.state.editObj,{'nickname': e.target.value})
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )
                                    :
                                    this.state.isLayer == 'phone' ?
                                        (
                                            <div className='phone-box'>
                                                <h2>联系电话</h2>
                                                <div className='form-input'>
                                                    <input type="number" placeholder='联系电话'
                                                       defaultValue={this.state.formData.phone}
                                                       onChange={
                                                           (e)=>this.setState({
                                                               editObj: Object.assign({},this.state.editObj,{'phone': e.target.value})
                                                           })
                                                       }
                                                    />
                                                </div>
                                            </div>
                                        )
                                    :
                                    this.state.isLayer == 'email' ?
                                        (
                                            <div className='email-box'>
                                                <h2>联系邮箱</h2>
                                                <div className='form-input'>
                                                    <input type="text" placeholder='联系邮箱'
                                                       defaultValue={this.state.formData.email}
                                                       onChange={
                                                           (e)=>this.setState({
                                                               editObj: Object.assign({},this.state.editObj,{'email': e.target.value})
                                                           })
                                                       }
                                                    />
                                                </div>
                                            </div>
                                        )
                                    :
                                    this.state.isLayer == 'QQ' ?
                                        (
                                            <div className='QQ-box'>
                                                <h2>联系QQ</h2>
                                                <div className='form-input'>
                                                    <input type="number" placeholder='联系QQ'
                                                       defaultValue={this.state.formData.QQ}
                                                       onChange={
                                                           (e)=>this.setState({
                                                               editObj: Object.assign({},this.state.editObj,{'QQ': e.target.value})
                                                           })
                                                       }
                                                    />
                                                </div>
                                            </div>
                                        )
                                    :
                                    this.state.isLayer == 'signature' ?
                                        (
                                            <div className='signature-box'>
                                                <h2>个性签名</h2>
                                                <div className='form-input'>
                                                    <textarea type="text" placeholder='个性签名'
                                                    defaultValue={this.state.formData.signature}
                                                    onChange={
                                                        (e)=>this.setState({
                                                            editObj: Object.assign({},this.state.editObj,{'signature': e.target.value})
                                                        })
                                                    }
                                                    />
                                                </div>
                                            </div>
                                        )
                                    : ''
                                    
                                }
                                <div className='btn-btn'>
                                    <span className='close' onClick={this.layerCloseFun.bind(this)}>取消</span>
                                    <span className='yes' onClick={this.layerYesFun.bind(this)}>确定</span>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
                <Prompt/>
            </div>
        );
    }
    componentDidMount() {

        //初始化城市
        if (this.state.formData.provinceId!=0) {

            this.state.cityName = tools.cityName(this.state.formData.provinceId)
                        + ' ' + tools.cityName(this.state.formData.cityId)
                        + ' ' + tools.cityName(this.state.formData.areaId);
        }
        this.setState({'cityName':this.state.cityName});

        //初始化的editObj数据
        this.setState({editObj:this.state.formData});
    }

    saveFun() {//保存修改

    }
    layerCloseFun () {//关闭弹窗
        this.setState({isLayer:''});
    }
    layerYesFun () {//保存数据
        //sex 性别 / nickname 昵称 / phone 手机号 / email 邮箱  / QQ / signature 个性签名
        var self = this;
        switch (this.state.isLayer) {
            case 'sex' :
                this.state.formData.sex = this.state.editObj.sex;break;
            case 'nickname' :
                this.state.formData.nickname = this.state.editObj.nickname;break;
            case 'phone' :
                var reg=/^1[345678]\d{9}$/;
                if(!reg.test(self.state.editObj.phone)){
                    self.props.promptFun('请输入正确的手机号');
                    return false;
                }
                this.state.formData.phone = this.state.editObj.phone;break;
            case 'email' :
                var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
                if(!reg.test(self.state.editObj.email)){
                    self.props.promptFun('请输入正确的邮箱');
                    return false;
                }
                this.state.formData.email = this.state.editObj.email;break;
            case 'QQ' :
                if(!self.state.editObj.phone){
                    self.props.promptFun('请输入QQ');
                    return false;
                }
                this.state.formData.QQ = this.state.editObj.QQ;break;
            case 'signature' :
                if(!self.state.editObj.signature){
                    self.props.promptFun('请输入个性签名');
                    return false;
                }
                this.state.formData.signature = this.state.editObj.signature;break;
        }

        this.setState({'formData':this.state.formData,isLayer:''});
    }
    getDate(val) {//年月日
        this.state.openDate = false;
        this.state.formData.date = val;

        this.setState({
            formData: this.state.formData,
            openDate: this.state.openDate,
            isEdited: true,
        });
        console.log(this.state);
    }

    getCity(val) {//接收数据 地区
        this.state.openCity = val.open;
        this.state.formData.provinceId = val.id.provinceId;
        this.state.formData.cityId = val.id.cityId;
        this.state.formData.areaId = val.id.areaId;
        this.state.cityName = val.cityName;
       
        this.setState({
            formData: this.state.formData,
            cityName: this.state.cityName,
            isEdited: true,
        });
        console.log(this.state);
    }
}
export default connect(
    state=>state,
    {promptFun:actions.promptFun}
)(Personal);