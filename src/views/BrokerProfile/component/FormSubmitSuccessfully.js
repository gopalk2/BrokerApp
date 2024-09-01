import React from 'react';
import { ReactComponent as CircleCheckIconSVG } from '../../../assets/iconSvg/success.svg';
import styles from './FormSubmitSuccessfully.module.css';

const FormSubmitSuccessfully = props => {
  const { message } = props;

  return (
    <div className={styles['space-added-successfully']}>
      <div>
        <div className={`div-center mb-3`}>
          <CircleCheckIconSVG className={styles['circle-icon']} />
        </div>
        <div className={`${styles['form-successfully-submit-text']}`}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default FormSubmitSuccessfully;
