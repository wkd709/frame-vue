import React, {Component} from 'react';
import * as tools from '../../tools/public.js';

class cityChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceList: [],
            cityList:[],
            areaList:[],
            leftY: 60,
            leftIndex: 0,
            centerY: 60,
            centerIndex: 0,
            rightY: 60,
            rightIndex: 0,
            cityFormData: {
                provinceId: 0,
                cityId: 0,
                areaId:0,
            },
            cityName: '',
        }
        this.actionFun = this.actionFun.bind(this);
    }
    render() {
        return (
            <div className={'picker-city '+(this.props.openCity ? 'picker-show':'')}>
                <div className="toolbar">
                    <span className='cancel' onClick={this.cancelFun.bind(this)}>取消</span>
                    <span className='yes' onClick={this.yesFun.bind(this)}>确定</span>
                </div>
                <div className='picker-modal'>
                <div className='active-line'></div>
                    <div className='picker-list-left'>
                        {
                            this.state.provinceList.map((item,index)=>(
                                <div className={'packer-item '+(this.state.leftIndex==index?'selected':'')}
                                    style={{'transform':'translateY('+this.state.leftY+'px)'}}
                                    onClick={()=>this.actionFun('left',index,item.id)}
                                    key={index}>{item.name}</div>
                            ))
                        }
                    </div>
                    <div className='picker-list-center'>
                        {
                            this.state.cityList.map((item,index)=>(
                                <div className={'packer-item '+(this.state.centerIndex==index?'selected':'')}
                                    style={{'transform':'translateY('+this.state.centerY+'px)'}}
                                    onClick={()=>this.actionFun('center',index,item.id)}
                                    key={index}>{item.name}</div>
                            ))
                        }
                    </div>
                    <div className='picker-list-right'>
                        {
                            this.state.areaList.map((item,index)=>(
                                <div className={'packer-item '+(this.state.rightIndex==index?'selected':'')}
                                    style={{'transform':'translateY('+this.state.rightY+'px)'}}
                                    onClick={()=>this.actionFun('right',index,item.id)}
                                    key={index}>{item.name}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {//方法在将组件输出呈现给DOM后运行
        this.getData();
    }
    getData() {//初始化数据
        this.state.provinceList = tools.cityList(0);
        this.state.cityList = tools.cityList(tools.cityList(0)[0].id);
        this.state.areaList = tools.cityList(this.state.cityList[0].id);
        this.setState({
            'provinceList': this.state.provinceList,
            'cityList': this.state.cityList,
            'areaList': this.state.areaList
        });
    }

    yesFun() {//确定
        //城市数据
        var self = this;
        this.state.cityFormData = Object.assign({},this.state.cityFormData,{
            provinceId:this.state.provinceList[self.state.leftIndex].id,
            cityId:this.state.cityList[self.state.centerIndex].id,
            areaId:this.state.areaList[self.state.rightIndex].id
        });
        this.state.cityName = tools.cityName(this.state.cityFormData.provinceId) 
                        + ' ' + tools.cityName(this.state.cityFormData.cityId)
                        + ' ' + tools.cityName(this.state.cityFormData.areaId);

        this.setState({cityFormData: this.state.cityFormData,cityName:this.state.cityName});

        // 像父组件传递数据
        var obj = {
            open: false,
            id: this.state.cityFormData,
            cityName: this.state.cityName,
        }
        this.props.getCity(obj);
    }
    cancelFun() {//取消
        var obj = {
            open: false,
            id: this.state.cityFormData,
            cityName: this.state.cityName
        }
        this.props.getCity(obj);
    }

    actionFun(type,index,id) {
        if (this.state[type+'Index'] > index) {
            this.state[type+'Y'] = this.state[type+'Y'] + Math.abs(this.state[type+'Index'] - index)*30;
        } else {
            this.state[type+'Y'] = this.state[type+'Y'] - Math.abs(this.state[type+'Index'] - index)*30;
        }
        this.setState({
            [type+'Index']:index,
            [type+'Y']:this.state[type+'Y']
        });

        if(type=='left') {
            this.state.cityList = tools.cityList(id);
            this.state.areaList = tools.cityList(this.state.cityList[0].id);
            this.setState({
                'cityList': this.state.cityList,
                'areaList': this.state.areaList,
                'centerY':60,
                'rightY':60,
                'centerIndex':0,
                'rightIndex':0
            });
        }
        if (type=='center') {
            this.state.areaList = tools.cityList(id);
            this.setState({
                'areaList': this.state.areaList,
                'rightY':60,
                'rightIndex':0
            });
        }
    }
}
export default cityChange;