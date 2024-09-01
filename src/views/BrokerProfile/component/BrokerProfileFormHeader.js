import React from 'react';
import { ReactComponent as WrongIconSVG } from '../../../assets/iconSvg/close.svg';
import Button from '../../../components/Buttons/Button';
import { brokerProfileTabData } from '../config/brokerProfileData';
import styles from '../style.module.css';
import BrokerProfileNav from './BrokerProfileNav';

const BrokerProfileFormHeader = props => {

  const { setBrokerProfileTab, brokerProfileTab, onClose } = props;

  const toggleDetailCategories = activeType => {
    setBrokerProfileTab(activeType);
  };

  return (
    <div className='w-100 d-flex f-wrap'>
      <div className='w-90'>
        <p className='mb-2'>New Broker Profile</p>
      </div>
      <div className='w-10 text-end'>
        <Button
          icon={<WrongIconSVG className={styles['close-icon']} />}
          iconPosition='left'
          variant='transparent'
          className='p-0'
          onClick={onClose}
        />
      </div>
      <div className='w-100'>
        <BrokerProfileNav
          toggleDetailCategories={toggleDetailCategories}
          detailCategories={brokerProfileTab}
          spaceDetailsItems={brokerProfileTabData}
        />
      </div>
    </div>
  );
};

export default BrokerProfileFormHeader;
