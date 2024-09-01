import React from 'react';
import styles from './styles.module.css';

const InputWithTextArea = props => {
  const {
    label,
    className,
    helperText,
    placeholder,
    variant,
    value,
    onChange,
    onBlur,
    onFocus,
    type,
    showError,
    rows
  } = props;

  const defaultType = type || 'text';
  const defaultPlaceholder =
    placeholder || `Enter a valid ${label?.toLowerCase()}`;
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
    <div className={`${styles[defaultVariant]} ${className}`}>
      {label && <label className={`${styles.label} `}>{label}</label>}
      <div className={`${styles['textarea-div']}`}>
        <textarea
          type={defaultType}
          placeholder={defaultPlaceholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
          className={`${styles.textarea} ${showError && styles['error']}`}
          rows={rows}
        />
        {helperText && (
          <p
            className={`${styles['textarea-helper-text']} ${
              showError && styles['error-text']
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputWithTextArea;
