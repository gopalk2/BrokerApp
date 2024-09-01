import React, { useState } from 'react';
import { ReactComponent as UpIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../assets/iconSvg/dropdown.svg';
import Button from './Button';
import styles from './style.module.css';

const ButtonWithNestedButton = props => {
  const {
    handlePrimaryBtnClick,
    handleSecondaryBtnClick,
    primaryLabel,
    secondaryLabel,
    primaryIcon,
    secondaryIcon,
    className
  } = props;
  const [showImportUser, setShowImportUser] = useState(false);

  const primaryBtnClickHandler = () => {
    setShowImportUser(false);
    handlePrimaryBtnClick();
  };

  const secBtnClickHandler = () => {
    setShowImportUser(false);
    handleSecondaryBtnClick();
  };

  const handleToggleImportUser = () => {
    setShowImportUser(prevShowImportUser => !prevShowImportUser);
  };

  return (
    <div className={`${styles['button-with-nested-button']}`}>
      <Button
        label={primaryLabel}
        icon={primaryIcon}
        iconPosition='left'
        onClick={primaryBtnClickHandler}
        className={`${styles['primary-btn']} ${className}`}
      />
      <Button
        onClick={handleToggleImportUser}
        iconPosition='left'
        icon={
          showImportUser ? (
            <UpIconSVG className={styles['up-icon']} />
          ) : (
            <DownIconSVG className={styles['down-icon']} />
          )
        }
        className={`${styles['arrow-btn']} ${className}`}
      />

      {showImportUser && (
        <Button
          label={secondaryLabel}
          icon={secondaryIcon}
          iconPosition='left'
          onClick={secBtnClickHandler}
          className={`${styles['secondary-btn']} ${className}`}
        />
      )}
    </div>
  );
};

export default ButtonWithNestedButton;
