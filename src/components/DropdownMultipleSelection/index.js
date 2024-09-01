import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as WrongIconSVG } from '../../assets/iconSvg/close.svg';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import Button from '../Buttons/Button';
import Checkbox from '../Checkbox';
import styles from './styles.module.css';

const DropdownMultipleSelection = ({
  data = [],
  placeholder = 'Select options',
  selectedOptions = [],
  setSelectedOptions,
  hideSelectedOptions,
  showOneSelectedOptions,
  oneSelectedText,
  className,
  variant,
  pillStyles,
  dropdownOptionsStyle
}) => {
  const [showOptions, setShowOptions] = useState(false);

  // Ensure selectedOptions is always an array
  const safeSelectedOptions = Array.isArray(selectedOptions) ? selectedOptions : [];

  const handleChange = (id) => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(id)
        ? prevSelectedOptions.filter(optionId => optionId !== id)
        : [...prevSelectedOptions, id]
    );
  };

  const handleToggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
  };

  const handleRemoveOption = (id) => {
    setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter(optionId => optionId !== id));
  };

  const defaultVariant = variant || 'dark-bg-white-text';
  const optionColor = defaultVariant === 'dark-bg-white-text' ? 'white-text' : 'blue-text';

  return (
    <div className={`${styles['dropdown']} ${className}`}>
      <div
        onClick={handleToggleOptions}
        className={`${styles['dropdown-button']}`}
      >
        {safeSelectedOptions.length > 0 ? (
          hideSelectedOptions ? (
            `${safeSelectedOptions.length} items selected`
          ) : showOneSelectedOptions ? (
            <div className={`${styles['dropdown-pill-div']}`}>
              <div className={`${styles['dropdown-pill']}`}>
                {data.find(option => option.id === safeSelectedOptions[0])?.value}
                <Button
                  variant='blue-color-button'
                  label='x'
                  onClick={() => handleRemoveOption(safeSelectedOptions[0])}
                />
              </div>
              {safeSelectedOptions.length > 1 && (
                <div className={`${styles['dropdown-pill-count']}`}>
                  +{safeSelectedOptions.length - 1} {oneSelectedText}
                </div>
              )}
            </div>
          ) : (
            <div className={`${styles['dropdown-pill-div']}`}>
              {safeSelectedOptions.map((id, idx) => {
                const option = data.find(opt => opt.id === id);
                return (
                  option && (
                    <div
                      key={idx}
                      className={`${styles['dropdown-pill']} ${pillStyles}`}
                    >
                      {option.value}
                      <Button
                        variant='blue-color-button'
                        label=''
                        icon={<WrongIconSVG className={styles['close-icon']} />}
                        iconPosition='left'
                        onClick={() => handleRemoveOption(id)}
                      />
                    </div>
                  )
                );
              })}
            </div>
          )
        ) : (
          <span className={`${styles['placeholder-ms']}`}>{placeholder}</span>
        )}
        {showOptions ? (
          <UpIconSVG className={styles['up-icon']} />
        ) : (
          <DownIconSVG className={styles['down-icon']} />
        )}
      </div>
      {showOptions && (
        <div
          className={`${styles['dropdown-options']} ${dropdownOptionsStyle} ${styles[defaultVariant]}`}
        >
          {data.map(option => (
            <div
              key={option.id}
              className={`${styles['dropdown-option']} ${styles[optionColor]}`}
            >
              <label className='w-100'>
                <Checkbox
                  label={option.value}
                  id={option.id}
                  checked={safeSelectedOptions.includes(option.id)}
                  onChange={() => handleChange(option.id)}
                  className={`${optionColor} w-100`}
                  checkboxColor={optionColor === 'white-text' ? 'white' : ''}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownMultipleSelection.propTypes = {
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  selectedOptions: PropTypes.array.isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
  hideSelectedOptions: PropTypes.bool,
  showOneSelectedOptions: PropTypes.bool,
  oneSelectedText: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  pillStyles: PropTypes.string,
  dropdownOptionsStyle: PropTypes.string
};

export default DropdownMultipleSelection;
