import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

const PopModal = props => {

  const { children, onClose, isOpen, size, className } = props;

  const sizeClass = size || 'sm';

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`${styles['pop-modal']}`} onClick={onClose}>
      <div
        className={`${styles['pop-modal-div']}  ${styles[sizeClass]} ${className}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default PopModal;
