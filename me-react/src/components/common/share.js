import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'shareBox '+(this.props.isShare?"show":'')}>
                <div className='title'>分享到：</div>
                <div className="imagebox_share">
                    <div className='qzone'>
                        <div className='img'><i className='iconfont icon-qqkongjian'></i></div>
                        <p>QQ空间</p>
                    </div>
                    <div className='weibo'>
                        <div className='img'><i className='iconfont icon-weibo'></i></div>
                        <p>新浪微博</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Toggle;