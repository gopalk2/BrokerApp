import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = props => {
  const { isOpen, onClose, children, position, className } = props;
  if (!isOpen) return null;

  let modalStyle = {
    position: 'fixed', // Use 'fixed' instead of 'absolute'
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  if (position) {
    const posLeft = position.left
      ? { left: `${position.left}px` }
      : { right: `${position.right}px` };

    const posTop = position.top
      ? { top: `${position.top}px` }
      : { bottom: `${position.bottom}px` };

    modalStyle = {
      position: 'absolute',
      ...posTop,
      ...posLeft
    };
  }

  return ReactDOM.createPortal(
    <div className={`${styles.overlay} `} onClick={onClose}>
      <div
        className={`${styles['modal-body']} ${className} `}
        style={modalStyle}
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
export default Modal;
