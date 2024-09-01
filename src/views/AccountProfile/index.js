import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import Badge from '../../components/Badge';
import BrokerFooter from '../../components/BrokerFooter';
import BrokerHeaderNav from '../../components/BrokerHeaderNav';
import { footerBlogList, footerCompanyList } from '../Home/config/homeData';
// import FilterSectionHorizontal from '../Spaces/component/FilterSectionHorizontal';
import ProfileForm from './Component/ProfileForm';
import { formType } from './config/profileData';
import styles from './style.module.css';

const AccountProfile = () => {

  const [accountType, setAccountType] = useState('Personal Details');

  let accountForm;
  if (accountType === 'Personal Details') {
    accountForm = <ProfileForm setAccountType={setAccountType} />;
  }

  const handleTab = activeTab => {
    setAccountType(activeTab);
  };

  return (
    <div className={styles['profile']}>
      <BrokerHeaderNav className={styles['background-none']} />
      <div className={styles['filter-section-div']}>
        <div className='w-90'>
          <div className='div-space-start'>
            <div className={styles['heading']}>
              <span className='body-xxl'>Edit Profile</span>
            </div>
            {formType.map(item => (
              <div className='w-fc' onClick={() => handleTab(item.label)}>
                <Badge
                  label={item.label}
                  icon={item.icon}
                  variant='user-badge basic-grey'
                  className={
                    accountType === item.label
                      ? styles['active-badge']
                      : styles['form-badge']
                  }
                  key={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['profile-container']}>{accountForm}</div>
      <div className={styles['filter-footer']}>
        <BrokerFooter
          footerBlogList={footerBlogList}
          footerCompanyList={footerCompanyList}
        />
      </div>
    </div>
  );
};

export default AccountProfile;
