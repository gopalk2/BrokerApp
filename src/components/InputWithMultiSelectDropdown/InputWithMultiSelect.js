import React from 'react';
import DropdownMultipleSelect from '../DropdownMultipleSelection/DropdownMultiSelect';
import styles from './styles.module.css';

const InputWithMultiSelect = props => {
  const {
    label,
    options,
    selectedOptions,
    handleDropdownChange,
    handleRemoveOptions,
    className,
    dropdownStyles,
    variant,
    pillStyles
  } = props;

  const defaultVariant =
    variant || 'multi-input-with-dropdown-with-label-on-top';

  return (
    <div className={`${styles[defaultVariant]} ${className}`}>
      <label className={`${styles.label}`}>{label}</label>
      <div className={`${styles['dropdown-div']} ${dropdownStyles}`}>
        <DropdownMultipleSelect
          data={options}
          placeholder='select an option'
          selectedOptions={selectedOptions}
          handleDropdownChange={handleDropdownChange}
          handleRemoveOptions={handleRemoveOptions}
          variant={'light-bg-blue-text'}
          pillStyles={pillStyles}
        />
      </div>
    </div>
  );
};

export default InputWithMultiSelect;
