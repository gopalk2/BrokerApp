import React, { useState } from 'react';
import { ReactComponent as ReviewAddIconSVG } from '../../../../../assets/iconSvg/add_review.svg';
import { ReactComponent as VerifiedShieldIconSVG } from '../../../../../assets/iconSvg/resolved.svg';
import { ReactComponent as FillStarIconSVG } from '../../../../../assets/iconSvg/star_filled.svg';
import { ReactComponent as EmptyStarIconSVG } from '../../../../../assets/iconSvg/star_outlined.svg';
import { getYearMonthFromDate } from '../../../../../Comman/Utility';
import Badge from '../../../../../components/Badge';
import Button from '../../../../../components/Buttons/Button';
import {
  ratingType,
  // reviewData
} from '../../../config/brokerProfileData';
import styles from './ReviewComponent.module.css';
import { useSelector } from 'react-redux';

const Rating = (data) => {

  const { setWriteReview, brokerReviews } = data
  const isLogin = useSelector((state) => state?.loginSignup?.loggedIn);

  const [activeButton, setActiveButton] = useState('Highest rated');

  const handleActiveButton = active => {
    setActiveButton(active);
  };

  const findFirstLetter = name => {
    const names = name?.trim()?.split(' ');
    let initials = '';

    names?.forEach(name => {
      initials += name?.charAt(0).toUpperCase();
    });

    return initials;
  };

  const handleWriteReview = review => {
    setWriteReview(review);
  };

  return (
    <div className='w-100 '>
      <div className='d-flex'>
        <div className='w-70 div-space-start'>
          <span className='h2-text'>Reviews</span>
          <Badge
            label='1'
            variant='user-badge basic-grey'
            className='w-fc ml-4 mt-1'
          />
        </div>
        <div className='w-30'>
          {isLogin && (
            <Button
              icon={<ReviewAddIconSVG className={styles['review-add-icon']} />}
              iconPosition='left'
              label='Write a review'
              variant='transparent'
              onClick={() => handleWriteReview('write review')}
            />
          )}
        </div>
      </div>

      <div className={styles['review-type-container']}>
        {ratingType.map(item => (
          <Button
            label={item?.value}
            className={
              activeButton === item?.value
                ? styles['active-button']
                : styles['inactive-button']
            }
            onClick={() => handleActiveButton(item?.value)}
            key={item?.id}
          />
        ))}
      </div>

      {brokerReviews?.map(item => (
        <div className={styles['review-text-container']} key={item?.id}>
          <div className={styles['broker-detail']}>
            <div className='w-10 mr-2'>
              <div className={styles['circle']}>
                {findFirstLetter(item?.user?.name)}
                {/* {findFirstLetter(item.name)} */}
              </div>
            </div>

            <div className='w-50'>
              <p className={styles['name']}>{item?.user?.name}</p>
              <div className='w-100 d-flex'>
                {item.rate === item.rate ? (
                  <FillStarIconSVG className={styles['start-icon']} />
                ) : (
                  <EmptyStarIconSVG className={styles['start-icon']} />
                )}
                <div className='w-fc'>
                  <p className={styles['review-text']}>
                    {item?.rating + '/' + '5'}  | {item?.user?.createdAt ? getYearMonthFromDate(item?.user?.createdAt) : ''}
                    {/* {item?.rate} | {item?.locality} | {item?.date} */}
                  </p>
                </div>
              </div>
            </div>

            <div className='w-40 div-space-end text-end'>
              <VerifiedShieldIconSVG className={styles['shield-icon']} />
              <span className='helper-text-sm'>Verified review</span>
            </div>
          </div>

          <div className='div-space-start'>
            <p className={styles['review-text']}>{item?.review}</p>
          </div>
        </div>
      ))}
      {/* {reviewData.map(item => (
        <div className={styles['review-text-container']} key={item.id}>
          <div className={styles['broker-detail']}>
            <div className='w-10 mr-2'>
              <div className={styles['circle']}>
                {findFirstLetter(item.name)}
              </div>
            </div>

            <div className='w-50'>
              <p className={styles['name']}>{item.name}</p>
              <div className='w-100 d-flex'>
                {item.rate === item.rate ? (
                  <FillStarIconSVG className={styles['start-icon']} />
                ) : (
                  <EmptyStarIconSVG className={styles['start-icon']} />
                )}
                <div className='w-fc'>
                  <p className={styles['review-text']}>
                    {item.rate} | {item.locality} | {item.date}
                  </p>
                </div>
              </div>
            </div>

            <div className='w-40 div-space-end text-end'>
              <VerifiedShieldIconSVG className={styles['shield-icon']} />
              <span className='helper-text-sm'>Verified review</span>
            </div>
          </div>

          <div className='div-space-start'>
            <p className={styles['review-text']}>{item.review}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Rating;
