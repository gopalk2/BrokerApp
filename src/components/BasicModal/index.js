import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

const BasicModal = props => {

  const { isOpen, onClose, children, size, width } = props;

  if (!isOpen) return null;
  let modalStyles = {};
  if (width) {
    modalStyles = { width: width };
  }

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div
        className={`${styles['modal-body-div']} ${size}`}
        style={modalStyles}
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

export default BasicModal;
