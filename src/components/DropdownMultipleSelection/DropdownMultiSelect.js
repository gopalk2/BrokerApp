import React, { useState } from 'react';
import { ReactComponent as WrongIconSVG } from '../../assets/iconSvg/close.svg';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import Button from '../Buttons/Button';
import Checkbox from '../Checkbox';
import styles from './styles.module.css';

const DropdownMultiSelect = props => {
  const {
    data,
    placeholder,
    selectedOptions,
    handleDropdownChange,
    handleRemoveOptions,
    hideSelectedOptions,
    className,
    variant,
    pillStyles
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  const handleChange = value => {
    handleDropdownChange(value);
  };
  const handleToggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
  };

  const handleRemoveOption = value => {
    handleRemoveOptions(value);
  };

  const defaultVariant = variant || 'dark-bg-white-text';
  const optionColor =
    defaultVariant === 'dark-bg-white-text' ? 'white-text' : 'blue-text';

  return (
    <div className={`${styles['dropdown']} ${className}`}>
      <div
        onClick={handleToggleOptions}
        className={`${styles['dropdown-button']}`}
      >
        {selectedOptions.length > 0 ? (
          hideSelectedOptions ? (
            `${selectedOptions.length} items selected`
          ) : (
            <div className={`${styles['dropdown-pill-div']}`}>
              {selectedOptions.map((option, idx) => (
                <div
                  key={idx}
                  className={`${styles['dropdown-pill']} ${pillStyles}`}
                >
                  {option}
                  <Button
                    variant='blue-color-button'
                    label=''
                    icon={<WrongIconSVG className={styles['close-icon']} />}
                    iconPosition='left'
                    onClick={() => handleRemoveOption(option)}
                  />
                </div>
              ))}
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
          className={`${styles['dropdown-options']} ${styles[defaultVariant]}`}
        >
          {data.map(option => (
            <div
              key={option.id}
              className={`${styles['dropdown-option']} ${styles[optionColor]}`}
            >
              <label className='w-100'>
                <Checkbox
                  label={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleChange}
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

export default DropdownMultiSelect;
