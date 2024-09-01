import React, { useState } from 'react';
import './style.css';

const Tooltip = props => {
  const { text, children, className } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggleTooltip = () => {
    setShowTooltip(prevShowTooltip => !prevShowTooltip);
  };

  return (
    <div className={`${className} tooltip-div`}>
      <div
        onMouseEnter={handleToggleTooltip}
        onMouseLeave={handleToggleTooltip}
        className='div-center w-100'
      >
        {children}
      </div>
      {showTooltip && <div className='tooltip-text-div'>{text}</div>}
    </div>
  );
};

export default Tooltip;
