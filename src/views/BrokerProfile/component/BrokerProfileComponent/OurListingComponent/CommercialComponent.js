import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as DownArrowIconSVG } from '../../../../../assets/iconSvg/double_arrow.svg';
import Button from '../../../../../components/Buttons/Button';
import OuterCard from '../../../../../components/OuterCard';
import styles from './CommercialComponent.module.css';
import OurListingCard from './OurListingCard';

const CommercialComponent = ({ listingData }) => {

  const commercialData = useSelector(state => state.brokerProfile.commercialData);

  const [visibleCards, setVisibleCards] = useState(Math.min(6, commercialData.length));

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  return (
    <div className={styles['commercial-space-card']}>
      {listingData?.slice(0, visibleCards)?.map(value => (
        <OuterCard className={styles['card']} key={value?.id}>
          <OurListingCard data={value} />
        </OuterCard>
      ))}
      {/* {commercialData?.slice(0, visibleCards)?.map(value => (
        <OuterCard className={styles['card']} key={value?.id}>
          <OurListingCard data={value} />
        </OuterCard>
      ))} */}

      {visibleCards < commercialData.length && (
        <div className='w-100 div-center' onClick={handleLoadMore}>
          <Button
            label='Load More'
            icon={<DownArrowIconSVG className={styles['down-arrow-icon']} />}
            iconPosition='right'
            variant='transparent'
            onClick={handleLoadMore}
          />
        </div>
      )}
    </div>
  );
};

export default CommercialComponent;
