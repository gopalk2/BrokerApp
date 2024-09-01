import React, { useEffect, useState } from 'react';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import styles from './styles.module.css';

const DropdownSingleSelection = props => {
  const {
    label = '',
    defaultValue = '',
    data = [],
    variant,
    iconPosition,
    dropdownChangeHandler,
    className,
    optionsVariant,
    size,
    buttonClassName
  } = props;

  const defaultSelectedValue = defaultValue || (data[0] ? data[0].value : '');
  const defaultSize = size || 'full-width';
  const defaultVariant = variant || 'blue-background';
  const optionsDefaultVariant = optionsVariant || 'white-background-options';
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultSelectedValue);

  useEffect(() => {
    setSelectedValue(defaultSelectedValue);
  }, [defaultSelectedValue]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOptionHandler = val => {
    setSelectedValue(val.value);
    setIsOpen(false);
    // console.log(val,'value');
    // dropdownChangeHandler(val);
    dropdownChangeHandler(val);
  };

  const getListItem = item => {
    return (
      <li
        key={item.id}
        className={`${styles['dropdown-option']}`}
        onClick={() => selectOptionHandler(item)}
      >
        {item.icon && iconPosition === 'left' ? item.icon : null}
        {item.value}
        {item.icon && iconPosition === 'right' ? item.icon : null}
      </li>
    );
  };

  return (
    <div
      className={`${styles.dropdown} ${styles[defaultVariant]} ${className} `}
    >
      <button
        className={`${styles['dropdown-button']} ${styles[defaultSize]} ${buttonClassName}`}
        onClick={toggleDropdown}
        type='button'
      >
        {label} {selectedValue}
        {isOpen ? (
          <UpIconSVG className={styles['up-icon']} />
        ) : (
          <DownIconSVG className={styles['down-icon']} />
        )}
      </button>
      {isOpen && (
        <ul
          className={`${styles['dropdown-options']} ${styles[defaultSize]} ${styles[optionsDefaultVariant]}`}
        >
          {data.map(item => getListItem(item))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSingleSelection;
