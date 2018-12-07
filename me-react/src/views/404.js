import React from 'react';

const NoMatch = ({ location }) => {
  return (
    <a className='noFound' onClick={()=>history.go(-1)}>
      <img src="/static/images/defalut.png" alt="404"/>
    </a>
  );
};
  
export default NoMatch;