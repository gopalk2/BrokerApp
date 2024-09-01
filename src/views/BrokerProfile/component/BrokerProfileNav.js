import React from 'react';
import Navs from '../../../components/Navs';
import styles from './BrokerProfileNav.module.css';

const BrokerProfileNav = props => {

  const { toggleDetailCategories, detailCategories, spaceDetailsItems } = props;

  return (
    <div className={`${styles['stand-alone-navs']}`}>
      <Navs
        items={spaceDetailsItems}
        page={detailCategories}
        togglePage={toggleDetailCategories}
        variant='outlined'
        hideBadge={true}
        className={`p-0`}
        buttonClass='ml-0 mr-2 pb-2'
      />
    </div>
  );
};

export default BrokerProfileNav;
