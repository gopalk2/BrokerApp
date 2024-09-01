import styles from './styles.module.css';

const InputWithBlock = props => {
  const {
    label,
    value,
    type,
    blockValue,
    blockCss,
    inputCss,
    blockPosition,
    variant,
    helperText,
    placeholder,
    disabled,
    showError,
    onChange,
    onBlur,
    onFocus,
    className,
    maxLength,
    pattern,
    // EnterType
  } = props;


  const defaultType = type || 'text';
  const defaultPlaceholder =
    placeholder || `Enter a valid ${label?.toLowerCase()}`;
  const defaultVariant = variant || 'input-with-block-with-label-on-top';

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
        <div
          className={`${styles['block-div']} ${showError && styles['error']}`}
        >
          {blockPosition === 'start' && (
            <div className={`${styles.block} ${styles['border-right']} ${blockCss}`} >
              {blockValue}
            </div>
          )}
          <input
            type={defaultType}
            value={value}
            placeholder={defaultPlaceholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`${styles.input} ${inputCss}`}
            disabled={disabled}
            maxLength={maxLength}
            pattern={pattern}
          />
          {blockPosition === 'end' && (
            <div
              className={`${styles.block} ${styles['border-left']} ${blockCss}`}
            >
              {blockValue}
            </div>
          )}
        </div>
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

export default InputWithBlock;
