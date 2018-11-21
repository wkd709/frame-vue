import React from 'react';

class Newest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    render() {
        return (
            <div className='Newest list'>
                {
                    this.state.list && this.state.list.length > 0 ?
                    this.state.list.map((key,index)=>(
                        <a className='item' key={index}>
                            <div>
                                <img src="/static/images/home/15392409688261454_45939002_S240.jpg" alt=""/>
                                <span className='info'>
                                    <img src="/static/images/home/53393816_1514327089_71270.jpg" alt=""/>
                                    断魂剑魔
                                </span>
                            </div>
                        </a>
                    ))
                    :
                    (
                        <div className='defalut'>
                            数据跑丢了~~~
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Newest;