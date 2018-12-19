import React from 'react';
import '../../style/user.scss';
import actions from "../../redux/actions/promptActions";
import Prompt from '../../components/common/prompt';
import {connect} from 'react-redux';

class settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',//账号
            password: '',//密码
            isShow: false,
            accountStep: 0,
            isSend: true,
            codeText: '获取验证码',
            codeNum: 60,
            timer: '',
            accountData: {
                oldPsd: '',
                phone: '',
                code: '',
                psd: ''
            },
            isShow1:false,
            isShow2:false,
            isShow3:false,
            passwordData: {
                oldPsd: '',
                nowPsd: '',
                confirmPsd: '',
            },
        }

    }
    render() {
        var state = this.props.location.state;
        return (
            <div className='user-box settings-box'>
                <div className='header-title'>
                    <i className='iconfont icon-zuojiantou' onClick={() => {history.go(-1)}}/>
                    {state.header === 'account' ? "更换绑定手机号" : '修改密码'}
                </div>

                {
                    /* 更换绑定手机号 */
                    state.header === 'account' ?
                        (
                            <div className="account-box-cg">
                                {
                                    this.state.accountStep === 0 ?
                                        (
                                            <div>
                                                <div className='form-input'>
                                                    <input type={!this.state.isShow ?"password" : 'text'} placeholder='请输入登录密码'
                                                        onChange={e => this.setState({accountData:Object.assign({},this.state.accountData,{ oldPsd: e.target.value})})}/>
                                                    <span className={"eye iconfont " + (!this.state.isShow ? 'icon-yanjing-bi' : 'icon-yanjing')}
                                                        onClick={()=>this.setState({isShow:!this.state.isShow})}/>
                                                </div>
                                                <div className="btn" onClick={this.accountStep.bind(this)}>下一步</div>
                                            </div>
                                        )
                                        :
                                        this.state.accountStep === 1 ?
                                            (
                                                <div>
                                                    <div className='form-input'>
                                                        <span className='cc_area'>+86</span>
                                                        <input type="number" placeholder='手机号' name="user" className='input-phone'
                                                            onChange={e => this.setState({accountData:Object.assign({},this.state.accountData,{ phone: e.target.value})})}/>
                                                    </div>
                                                    <div className='form-input'>
                                                        <input type="number" placeholder='短信验证码' name="code" className='input-code'
                                                            onChange={e => this.setState({accountData:Object.assign({},this.state.accountData,{ code: e.target.value})})}/>
                                                        <span className={'cc_code '+(this.state.isSend ? 'blue' : '')} onClick={this.sendCode.bind(this)}>{this.state.codeText}</span>
                                                    </div>
                                                    <div className='form-input'>
                                                        <input type="password" placeholder='请输入密码(密码长度最小4位)' name="password" className='password'
                                                            onChange={e => this.setState({accountData:Object.assign({},this.state.accountData,{ psd: e.target.value})})}/>
                                                    </div>
                                                    <div className="btn" onClick={this.accountStep.bind(this)}>完成</div>
                                                </div>
                                            )
                                            : ''
                                }
                            </div>
                        )
                    :
                    /* 修改密码 */
                    state.header === 'password' ?
                    (
                        <div className="password-box-cg">
                            <div className='form-input'>
                                <input type={this.state.isShow1 ?"text" : 'password'} placeholder='请输入原密码'
                                    onChange={e => this.setState({passwordData:Object.assign({},this.state.passwordData,{ oldPsd: e.target.value})})}/>
                                <span className={"eye iconfont " + (!this.state.isShow1 ? 'icon-yanjing-bi' : 'icon-yanjing')}
                                    onClick={()=>this.setState({isShow1:!this.state.isShow1})}/>
                            </div>
                            <div className='form-input'>
                                <input type={this.state.isShow2 ?"text" : 'password'} placeholder='请输入新密码'
                                    onChange={e => this.setState({passwordData:Object.assign({},this.state.passwordData,{ nowPsd: e.target.value})})}/>
                                <span className={"eye iconfont " + (!this.state.isShow2 ? 'icon-yanjing-bi' : 'icon-yanjing')}
                                    onClick={()=>this.setState({isShow2:!this.state.isShow2})}/>
                            </div>
                            <div className='form-input'>
                                <input type={this.state.isShow3 ?"text" : 'password'} placeholder='请确认密码'
                                   onChange={e => this.setState({passwordData:Object.assign({},this.state.passwordData,{ confirmPsd: e.target.value})})}/>
                                <span className={"eye iconfont " + (!this.state.isShow3 ? 'icon-yanjing-bi' : 'icon-yanjing')}
                                   onClick={()=>this.setState({isShow3:!this.state.isShow3})}/>
                            </div>
                            <div className="btn" onClick={this.passwordFun.bind(this)}>完成</div>
                        </div>
                    )
                    : ''
                }
                <Prompt/>
            </div>
        );
    }
    componentDidMount() {
    }
    passwordFun () {//修改密码
        if(!this.state.passwordData.oldPsd||this.state.passwordData.oldPsd.length<4){
            this.props.promptFun('原密码长度最小4位');
            return false;
        }
        if(!this.state.passwordData.nowPsd||this.state.passwordData.nowPsd.length<4){
            this.props.promptFun('新密码长度最小4位');
            return false;
        }
        if(!this.state.passwordData.confirmPsd||this.state.passwordData.confirmPsd.length<4){
            this.props.promptFun('确认密码长度最小4位');
            return false;
        }
        if(!this.state.passwordData.confirmPsd!==this.state.passwordData.nowPsd){
            this.props.promptFun('两次密码不一致');
            return false;
        }
    }
    accountStep() {//修改账号
        if (this.state.accountStep === 0) {
            if(!this.state.accountData.oldPsd||this.state.accountData.oldPsd.length.length<4){
                this.props.promptFun('密码错误');
                return false;
            }
            this.state.accountStep = 1;
        } else if (this.state.accountStep === 1) {
            // 手机号判断
            var reg=/^1[345678]\d{9}$/;
            if(!reg.test(this.state.accountData.phone)){
                this.props.promptFun('请输入正确的手机号');
                return false;
            }
            if(!this.state.accountData.code||this.state.accountData.code.length!==4){
                this.props.promptFun('验证码为4位数字');
                return false;
            }
            if(!this.state.accountData.psd||this.state.accountData.psd.length<4){
                this.props.promptFun('密码长度最小4位');
                return false;
            }
            this.props.LoginFun(this.state.accountData.phone);
        }
        this.setState({accountStep:this.state.accountStep});
    }
    sendCode() {//发送验证码
        var self = this;
        // 手机号判断
        var reg=/^1[345678]\d{9}$/;
        if(!reg.test(this.state.accountData.phone)){
            this.props.promptFun('请输入正确的手机号');
            return false;
        }

        if(this.state.isSend) {
            this.state.timer = setInterval(() => {
                if (self.state.codeNum===0) {
                    self.setState({'codeText':'获取验证码'});
                    self.setState({codeNum:60});
                    self.setState({isSend:true});
                    clearInterval(self.state.timer);
                } else {
                    self.setState({isSend:false});
                    self.setState({'codeText':self.state.codeNum+'s后重新发送'});
                    self.state.codeNum--;
                    self.setState({codeNum: self.state.codeNum});
                }
            }, 1000);
        }
    }
}
export default connect(
    state=>state,
    {
        promptFun:actions.promptFun,
    }
)(settings);