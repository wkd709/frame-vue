import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerObj: this.props.data
        };
    }

    render() {
        return (
            <div className='header'>
                {this.props.data.leftType ? <i className='iconfont icon-segi-icon-menu'></i> : ''}
                {this.props.data.name}
            </div>
        )
    }
}

export default Header;