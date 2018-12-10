import React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/promptActions';

class prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: ''
        }
    }

    render() {
        var self = this;
        var err = this.props.prompt.error;
        if (!err) {
            clearTimeout(self.state.timer);
            return '';
        }
        this.state.timer = setTimeout(function() {
            self.props.promptFun('');
        },1500);

        return (
            <div className='error'>{err}</div>
        );
    }
}

export default connect(state=>state,actions)(prompt);