import React, { useState, useEffect } from 'react';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import './style.css';

const DropdownCallDisposition = props => {
  const { defaultValue, data, dropdownChangeHandler, className } = props;
  const deafultSelectedValue = data.filter(item => item.name === defaultValue);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    setSelectedValue(deafultSelectedValue[0]);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOptionHandler = val => {
    setSelectedValue(val);
    setIsOpen(false);
    dropdownChangeHandler(val.name);
  };

  const getListItem = item => {
    return (
      <li
        key={item.id}
        className='dropdown-option-call b-border'
        onClick={() => selectOptionHandler(item)}
        style={{ color: item.color }}
      >
        {item.name}
      </li>
    );
  };
  return (
    <div
      className={`dropdown-call ${className}`}
      style={{
        borderColor: selectedValue?.color,
        backgroundColor: `${selectedValue?.color}1A`
      }}
    >
      <button
        className='dropdown-button-call'
        onClick={toggleDropdown}
        style={{ color: selectedValue?.color }}
      >
        {selectedValue?.name}{' '}
        <span>
          {isOpen ? (
            <UpIconSVG className='up-icon' />
          ) : (
            <DownIconSVG className='down-icon' />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className='dropdown-options-call'>
          {data.map(item => getListItem(item))}
        </ul>
      )}
    </div>
  );
};

export default DropdownCallDisposition;
