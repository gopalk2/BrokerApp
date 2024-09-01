import React from 'react';
import './style.css';

const MainDiv = props => {
  return (
    <div className={`main-div ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default MainDiv;
