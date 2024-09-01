import styles from './styles.module.css';

const InputWithIcon = props => {
  const {
    label,
    value,
    type,
    icon,
    iconPosition,
    variant,
    helperText,
    placeholder,
    disabled,
    showError,
    onChange,
    onBlur,
    onFocus,
    className
  } = props;

  const defaultType = type || 'text';
  const defaultPlaceholder =
    placeholder || `Enter a valid ${label?.toLowerCase()}`;
  const defaultVariant = variant || 'input-with-icon-with-label-on-top';

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
      {label && <label className={`${styles.label}`}>{label}</label>}
      <div className={`${styles['input-div']}`}>
        <div className={`${styles['icon-div']}`}>
          {iconPosition === 'start' && (
            <div className={`${styles.icon}`}>{icon}</div>
          )}
          <input
            type={defaultType}
            value={value}
            placeholder={defaultPlaceholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`${styles.input} ${showError && styles['error']}`}
            disabled={disabled}
          />
          {iconPosition === 'end' && (
            <div className={`${styles.icon}`}>{icon}</div>
          )}
        </div>
        {helperText && (
          <p
            className={`${styles['input-helper-text']} ${
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

export default InputWithIcon;
