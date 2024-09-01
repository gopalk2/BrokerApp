import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as GraphIconSvg } from '../../../assets/iconSvg/trending_up.svg';
import Badge from '../../../components/Badge';
import BrokerCard from './BrokerCard';
import styles from './FeaturedBroker.module.css';

const FeaturedBroker = () => {

  const brokerData = useSelector(state => state.brokerHome.featuredBroker);

  return ( 
    <div className='w-90'>
      <div className='body-lg d-flex'>
        Featured Brokers
        <Badge
          icon={<GraphIconSvg className={styles['graph-icon']} />}
          label='Promoted'
          variant='user-badge basic-grey'
          className={styles['badge']}
        />
      </div>
      <div className='div-space-between'>
        {brokerData?.map(value => (
          <div className={styles['card']} key={value.id}>
            <BrokerCard data={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBroker;
