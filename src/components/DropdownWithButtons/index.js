import React, { useState } from 'react';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import './style.css';

const DropdownWithButtons = props => {
  const { label, data, dropdownChangeHandler, className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOptionHandler = val => {
    setIsOpen(false);
    dropdownChangeHandler(val);
  };

  const getListItem = item => {
    return (
      <li
        key={item.id}
        className='dropdown-btn-option'
        onClick={() => selectOptionHandler(item.value)}
      >
        {item.value}
      </li>
    );
  };

  return (
    <div className={`dropdown-with-btn ${className}`}>
      <button className={`dropdown-btn`} onClick={toggleDropdown}>
        {label}{' '}
        <span className='pl-2'>
          {isOpen ? (
            <UpIconSVG className='up-icon' />
          ) : (
            <DownIconSVG className='down-icon' />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className={`dropdown-btn-options`}>
          {data.map(item => getListItem(item))}
        </ul>
      )}
    </div>
  );
};

export default DropdownWithButtons;
