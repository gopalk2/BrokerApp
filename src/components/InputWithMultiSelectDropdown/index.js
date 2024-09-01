import React from 'react';
import PropTypes from 'prop-types';
import DropdownMultipleSelection from '../DropdownMultipleSelection';
import styles from './styles.module.css';

const InputWithMultiSelectDropdown = ({
  label,
  options = [],
  selectedOptions = [],
  setSelectedOptions,
  className = '',
  dropdownStyles = '',
  variant = 'multi-input-with-dropdown-with-label-on-top',
  pillStyles = '',
  dropdownOptionsStyle = ''
}) => {
  return (
    <div className={`${styles[variant]} ${className}`}>
      <label className={styles.label}>{label}</label>
      <div className={`${styles['dropdown-div']} ${dropdownStyles}`}>
        <DropdownMultipleSelection
          data={options}
          placeholder='Select an option'
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          variant='light-bg-blue-text'
          pillStyles={pillStyles}
          dropdownOptionsStyle={dropdownOptionsStyle}
        />
      </div>
    </div>
  );
};

InputWithMultiSelectDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectedOptions: PropTypes.func.isRequired,
  className: PropTypes.string,
  dropdownStyles: PropTypes.string,
  variant: PropTypes.string,
  pillStyles: PropTypes.string,
  dropdownOptionsStyle: PropTypes.string
};

export default InputWithMultiSelectDropdown;
