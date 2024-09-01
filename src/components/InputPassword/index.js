import React, { useState } from 'react';
import { ReactComponent as VisibilityIconSVG } from '../../assets/iconSvg/eye.svg';
import { ReactComponent as VisibilityOffIconSVG } from '../../assets/iconSvg/visibility_off.svg';
import styles from './style.module.css';

const InputPassword = props => {
  const {
    label,
    value,
    helperText,
    placeholder,
    showError,
    className,
    onChange,
    onBlur,
    onFocus
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const defaultPlaceholder = placeholder || '';

  const changeHandler = event => {
    if (onChange !== undefined) {
      onChange(event);
    }
  };

  const blurHandler = () => {
    if (onBlur !== undefined) {
      onBlur();
    }
  };

  const focusHandler = () => {
    if (onFocus !== undefined) {
      onFocus();
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      <label className={styles['label']}>{label}</label>
      <div
        className={`${styles['form-control-input']} ${
          showError && styles['error']
        }`}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={defaultPlaceholder}
          onChange={e => changeHandler(e)}
          onBlur={() => blurHandler()}
          onFocus={() => focusHandler()}
          value={value}
          className={`${styles['input']} `}
        />
        <span onClick={handleTogglePassword}>
          {showPassword ? (
            <span>
              <VisibilityIconSVG className={styles['visible-icon']} />
            </span>
          ) : (
            <span>
              <VisibilityOffIconSVG className={styles['visible-icon']} />
            </span>
          )}
        </span>
      </div>

      {helperText && (
        <p className={`helper-text m-0 ${showError && 'error-text'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
