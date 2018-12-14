import React, {Component} from 'react';
import * as tools from '../../tools/public.js';

class dateChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
           year:'',//年
           month: '',//月
           date: '',//日
           yearList: [],
           monthList: [],
           dateList: [],
           formData: '',
        };
        this.changeDate = this.changeDate.bind(this);
    }
    render() {
        return (
            <div className={'picker-date '+(this.props.obj.openDate ? 'picker-show':'')}>
                <div className="toolbar">
                    <span className='cancel' onClick={this.cancelFun.bind(this)}>取消</span>
                    <span className='yes' onClick={this.yesFun.bind(this)}>确定</span>
                </div>
                <div className='date-title'>
                    <span>年</span>
                    <span>月</span>
                    <span>日</span>
                </div>
                <div className='picker-modal'>
                <div className='active-line'></div>
                    <div className='picker-list-left'>
                    {
                        this.state.yearList.map((key,index)=>(
                            <div className={'packer-item ' + (key*1 == this.state.year*1? 'selected' : '')} key={index}
                                onClick={()=>this.changeDate('year',key)}>{key}</div>
                        ))
                    }
                    </div>
                    <div className='picker-list-center'>
                        {
                            this.state.monthList.map((key,index)=>(
                                <div className={'packer-item ' + (key*1 == this.state.month*1 ? 'selected' : '')} key={index}
                                    onClick={()=>this.changeDate('month',key)}>{key}</div>
                            ))
                        }
                    </div>
                    <div className='picker-list-right'>
                        {
                            this.state.dateList.map((key,index)=>(
                                <div className={'packer-item ' + (key*1 == this.state.date*1 ? 'selected' : '')} key={index}
                                    onClick={()=>this.changeDate('date',key)}>{key}</div>
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

    getData () {
        var date =  this.props.obj.date;
        this.getDate(date);

        this.state.formData = date;
        this.setState({formData: this.state.formData});
    }

    getDate(date) {//获取日期
        var dataVal = date.split('-');
        this.state.yearList = tools.getDate(date).yearList;
        this.state.year = dataVal[0];
        this.state.monthList = tools.getDate(date).monthList;
        this.state.month = dataVal[1];
        this.state.dateList = tools.getDate(date).dateList;
        this.state.date = dataVal[2];
        this.setState({
            year: this.state.year,
            month: this.state.month,
            date: this.state.date,
            yearList: this.state.yearList,//年
            monthList: this.state.monthList,//月
            dateList: this.state.dateList,//日
        });
    }
    yesFun() {//确定
        this.state.formData = this.state.year +'-' + this.state.month + '-' + this.state.date;
        this.setState({formData: this.state.formData});

        this.sendDate();
    }

    cancelFun() {//取消
       this.sendDate();
    }

    sendDate(){//发送Date
        this.props.getDate(this.state.formData);
    }

    changeDate(type,val) {//选择日期
        if (!val) {
            return ;
        }
        var dateObj = '';
        if (type == 'year') {
            dateObj = val +'-01-01';
        }
        if (type == 'month') {
            dateObj = this.state.year +'-' + val + '-01';
        }

        if (type == 'date') {
            dateObj = this.state.year +'-' + this.state.month + '-' + val;
        }
        this.getDate(dateObj);

    }
}
export default dateChange;