import React from 'react';
import styles from './styles.module.css';

const InputLabel = props => {

  const {
    label,
    type,
    className,
    helperText,
    placeholder,
    variant,
    value,
    disabled,
    onChange,
    onBlur,
    onFocus,
    showError,
    inputStyle
  } = props;

  const defaultType = type || 'text';
  const defaultPlaceholder =
    placeholder || `Enter a valid ${label?.toLowerCase()}`;
  const defaultDisabled = disabled || false;

  const defaultVariant = variant || 'input-with-label-on-top';

  const handleChange = event => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div className={`${styles[defaultVariant]} ${className} `}>
      {label && <label className={`${styles.label}`}>{label}</label>}
      <div className={`${styles['input-div']}`}>
        <input
          type={defaultType}
          placeholder={defaultPlaceholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={`${styles.input} ${inputStyle} ${showError && styles['error']}`}
          value={value}
          disabled={defaultDisabled}
        />
        {helperText && (
          <p
            className={`${styles['input-helper-text']} ${showError && styles['error-text']
              }`}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputLabel;
