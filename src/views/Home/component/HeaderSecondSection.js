import React from 'react';
import { ReactComponent as UserSearchIconSVG } from '../../../assets/iconSvg/add_lead.svg';
import Button from '../../../components/Buttons/Button';
import styles from './HeaderSecondSection.module.css';

const HeaderSecondSection = props => {
  const { scrollToComponent } = props;

  return (
    <div className='w-90'>
      <div className={styles['header-div']}>
        <div className='div-center'>
          <p className={styles['header']}>
            BROKER <span className={styles['header-text']}>nahi</span> ... toh
            koi DEAL <span className={styles['header-text']}>nahi</span>
          </p>
        </div>
        <div className='div-center'>
          <p className={styles['sub-header']}>
            Transform your leasing journey with our trusted broker community.
          </p>
        </div>
        <div className='div-center'>
          <p className={styles['sub-header']}>
            {' '}
            Discover the difference expertise makes ...
          </p>
        </div>
      </div>
      <div className={styles['button-div']}>
        <Button
          icon={<UserSearchIconSVG className={styles['user-search-icon']} />}
          iconPosition='left'
          label='Discover top brokers'
          className={styles['button']}
          onClick={scrollToComponent}
        />
      </div>
    </div>
  );
};

export default HeaderSecondSection;
