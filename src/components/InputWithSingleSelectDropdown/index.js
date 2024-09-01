import React from 'react';
import DropdownSingleSelection from '../DropdownSingleSelection';
import styles from './styles.module.css';

const InputWithSingleSelectDropdown = props => {
  const {
    label,
    options = [],
    value = '',
    onDropdownChange,
    className,
    dropdownStyles,
    variant,
    optionsVariant,
    dropdownVariant
  } = props;

  const optionDefaultVariant = optionsVariant || 'darkblue-background-options';
  const dropdownDefaultVariant = dropdownVariant || 'outlined';
  const defaultVariant = variant || 'input-with-dropdown-with-label-on-top';

  return (
    <div className={`${styles[defaultVariant]} ${className}`}>
      {label && <label className={`${styles.label}`}>{label}</label>}
      <div className={`${styles['dropdown-div']} ${dropdownStyles} `}>
        <DropdownSingleSelection
          label=''
          defaultValue={value}
          data={options}
          dropdownChangeHandler={onDropdownChange}
          className='w-100 h-100'
          variant={dropdownDefaultVariant}
          color='dark-grey-text'
          optionsVariant={optionDefaultVariant}
        />
      </div>
    </div>
  );
};

export default InputWithSingleSelectDropdown;
