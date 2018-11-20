import React from 'react';

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    render() {
        return (
            <div className='Recommend list'>
                {
                    this.state.list.map((key,index)=>(
                        <a className='item' key={index}>
                            <div>
                                <img src="/static/images/home/15308184831591424_53393816_S240.jpg" alt=""/>
                                <span className='info'>
                                    <img src="/static/images/home/53393816_1514327089_71270.jpg" alt=""/>
                                    断魂剑魔
                                </span>
                            </div>
                        </a>
                    ))
                }
            </div>
        );
    }
}

export default Recommend;