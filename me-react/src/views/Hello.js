import React from 'react';
import '../style/hello.scss';
 class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
    //   this.setState(state => ({
    //     isToggleOn: !state.isToggleOn
    //   }));
    this.props.history.push('/Home')
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
          go home
        </button>
      );
    }
  }

  
const Hello = () => {
    return (
        <div>
            Hello,React
            <img src="/static/images/timg.jpg" alt=""/>
            <div id='home_id'>go home</div>
            <Toggle/>
        </div>
    )
}

export default Toggle;