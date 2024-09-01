import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ZoomMapIconSvg } from '../../../../../assets/iconSvg/leasable_area.svg';
import { ReactComponent as LocationIconSVG } from '../../../../../assets/iconSvg/location.svg';
import { ReactComponent as MoneyIconSVG } from '../../../../../assets/iconSvg/rupees.svg';
import { numberFormatter } from '../../../../../utils/formatters';
import styles from './OurListingCard.module.css';

const OurListingCard = props => {
  const { data } = props;
  // console.log(data)

  return (
    <div className={styles['space-card']}>
      <div className={styles['image-container']}>
        <img
          src={data?.image}
          // alt={`space-img-${data?.image}`}
          alt={'img'}
          className={styles['space-img']}
        />
      </div>
      <div className={styles['body']}>
        <div className='d-flex mt-2 mb-2'></div>
        <Link className='link-sm' to={'#'}>
          <p className='body-lg mb-1'>{data?.name}</p>
          <p className='body-sm'>
            <LocationIconSVG className={styles['location-icon']} />
            {data?.location?.name}, {data?.location?.city?.name}
          </p>
        </Link>
        <div className={styles['price-div']}>
          <div className='d-flex'>
            <div className='w-fc'>
              <MoneyIconSVG className={styles['money-icon']} />
            </div>
            <div className='w-fc'>
              <p className='body-xs mb-0'>starting from (per month) </p>
              <p className='body-lg'>
                {numberFormatter(data?.price)} /
                <span className='body-md'>sq.ft.</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles['seat-div']}>
          <div className='d-flex'>
            <div className='w-fc mr-2'>
              <ZoomMapIconSvg className={styles['zoom-icon']} />
            </div>
            <div className='w-fc mr-1'>
              <p className='body-xs mb-0'>Leasable Area (sq.ft.) </p>
              <p className='body-lg'>{numberFormatter(data?.leasableArea)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles['space-card']}>
    //   <div className={styles['image-container']}>
    //     <img
    //       src={data.spaceImg}
    //       alt={`space-img-${data.spaceImg}`}
    //       className={styles['space-img']}
    //     />
    //   </div>
    //   <div className={styles['body']}>
    //     <div className='d-flex mt-2 mb-2'></div>
    //     <Link className='link-sm' to={'#'}>
    //       <p className='body-lg mb-1'>{data.spaceName}</p>
    //       <p className='body-sm'>
    //         <LocationIconSVG className={styles['location-icon']} />
    //         {data.location}, {data.city}
    //       </p>
    //     </Link>
    //     <div className={styles['price-div']}>
    //       <div className='d-flex'>
    //         <div className='w-fc'>
    //           <MoneyIconSVG className={styles['money-icon']} />
    //         </div>
    //         <div className='w-fc'>
    //           <p className='body-xs mb-0'>starting from (per month) </p>
    //           <p className='body-lg'>
    //             {numberFormatter(data.price)} /
    //             <span className='body-md'>sq.ft.</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles['seat-div']}>
    //       <div className='d-flex'>
    //         <div className='w-fc mr-2'>
    //           <ZoomMapIconSvg className={styles['zoom-icon']} />
    //         </div>
    //         <div className='w-fc mr-1'>
    //           <p className='body-xs mb-0'>Leasable Area (sq.ft.) </p>
    //           <p className='body-lg'>{numberFormatter(data.leasableArea)}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OurListingCard;
