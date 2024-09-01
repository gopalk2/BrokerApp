import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const SideDrawer = props => {

  const {
    isOpen,
    onClose,
    width,
    showHeader,
    modalHeaderClass,
    modalHeadingIcon,
    modalHeading,
    children,
    showFooter,
    secondaryButtonLabel,
    handleSecondaryButtonActions,
    secondaryButtonVariant,
    primaryButtonLabel,
    handlePrimaryButtonActions,
    primaryButtonVariant,
    primaryButtonName,
    primaryButtonDisabled,
    footerCss,
    primaryButtonCss,
    secondaryButtonCss
  } = props;

  if (!isOpen) return null;
  let modalStyles = {};
  if (width) {
    modalStyles = { width: width };
  }

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div
        className={`${styles['modal-body-div']} ${width}`}
        style={modalStyles}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {showHeader && (
          <div className='h-10'>
            <h2 className={`${styles['modal-header-div']} ${modalHeaderClass}`}>
              {modalHeadingIcon}
              <span className='body-lg'>{modalHeading}</span>
            </h2>
          </div>
        )}
        <div className={`overflow p-4 ${showFooter ? 'h-80' : 'h-90'}`}>
          {children}
        </div>
        {showFooter && (
          <div className={`${styles['modal-footer-div']} ${footerCss}`}>
            {secondaryButtonLabel && (
              <Button
                label={secondaryButtonLabel ? secondaryButtonLabel : 'Cancel'}
                onClick={handleSecondaryButtonActions}
                variant={secondaryButtonVariant || 'outlined-button'}
                className={`mr-4 ${secondaryButtonCss}`}
              />
            )}
            {primaryButtonLabel && (
              <Button
                label={primaryButtonLabel}
                onClick={handlePrimaryButtonActions}
                className={primaryButtonCss}
                name={primaryButtonName}
                disabled={primaryButtonDisabled}
                variant={primaryButtonVariant || 'basic-blue-button'}
              />
            )}
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default SideDrawer;
