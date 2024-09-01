import React from 'react';
import styles from './style.module.css';

const Button = props => {
  const {
    label,
    onClick,
    className,
    variant,
    icon,
    iconPosition,
    disabled,
    name
  } = props;

  const type = props.type || 'button';
  const buttonVariant = variant || 'basic-blue-button';
  const btnName = name || 'button';

  return (
    <button
      type={type}
      name={btnName}
      onClick={onClick}
      className={`${styles[buttonVariant]} ${className ? className : ''}`}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' ? icon : null}
      {label && label}
      {icon && iconPosition === 'right' ? icon : null}
    </button>
  );
};

export default Button;
