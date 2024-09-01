import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as FillStarIconSVG } from '../../../../../assets/iconSvg/star_filled.svg';
import { ReactComponent as EmptyStarIconSVG } from '../../../../../assets/iconSvg/star_outlined.svg';
import Button from '../../../../../components/Buttons/Button';
import InputWithTextArea from '../../../../../components/InputWithTextArea';
import useInput from '../../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../../store/broker-profile-slice';
import { validateText } from '../../../../../utils/validations';
import { writeReview } from '../../../config/brokerProfileData';
import styles from './ReviewComponent.module.css';
import { get_BrokerReview_Data } from '../../../../../store/action/allAction';

const WriteReview = ({ setWriteReview }) => {

  const [rating, setRating] = useState(0);
  const brokerId = sessionStorage.getItem('BrokerId') ? sessionStorage.getItem('BrokerId') : ''
  const review = useSelector((state) => state?.brokerProfile?.review);

  // review && console.log('review', review)

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const dispatch = useDispatch();

  const findFirstLetter = name => {
    const names = name.trim().split(' ');
    let initials = '';
    names.forEach(name => {
      initials += name.charAt(0).toUpperCase();
    });
    return initials;
  };

  const handleStarClick = index => {
    if (index === rating) {
      setRating(Math.floor(index));
    } else {
      setRating(index);
    }
  };

  const getStarType = index => {
    if (index <= rating) {
      return <FillStarIconSVG className={styles['review-star-icon']} />;
    } else {
      return <EmptyStarIconSVG className={styles['review-star-icon']} />;
    }
  };

  const {
    input: postReview,
    isValid: isPostReviewValid,
    isTouched: isPostReviewTouched,
    handleInputChange: handlePostReviewChange,
    handleInputBlur: handlePostReviewBlurChange,
    handleInputFocus: handlePostReviewFocus,
    resetInput: resetPostReview
  } = useInput(validateText);

  const postReviewError = isPostReviewTouched && !isPostReviewValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log({ rating: rating, postReview: postReview })
      const res = await axios.post(`https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/brokers/${brokerId}/reviews`, { rating: rating, review: postReview });
      // console.log(res);
      if (res?.status == 200) {
        dispatch(brokerProfileAction.updatePostReview({ rating: rating, postReview: postReview }));
        dispatch(get_BrokerReview_Data(brokerId))
        setWriteReview('post review');
        resetPostReview();
      }
    } catch (error) {
      setWriteReview('post review');
      resetPostReview();
      console.log(error);
    }
  };

  const handleCancel = () => {
    setWriteReview('rating');
  };

  return (
    <div className={styles['write-review-container']}>
      <p className='h2-text'>Write a reviews</p>
      <div className={styles['review-text-container']}>
        <div className={styles['broker-detail']}>
          <div className='w-10 mr-2'>
            <div className={styles['circle']}>
              {findFirstLetter(writeReview.name)}
            </div>
          </div>

          <div className='w-90'>
            <p className={styles['name']}>{writeReview.name}</p>
            <div className='w-100'>
              <p className={styles['review-text']}>
                This review will be visible publically
              </p>
            </div>
          </div>
        </div>

        <div className='w-100'>
          <p className='body-md mb-1'>Give a rating</p>

          {stars.map(index => (
            <Button
              icon={getStarType(index)}
              iconPosition='right'
              variant='transparent'
              className='p-0'
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>

        <div className='w-100 mt-4'>
          <form action='' onSubmit={handleSubmit}>
            <p className='body-md mb-1'>Your review</p>
            <InputWithTextArea
              className={`w-100 mb-1`}
              value={postReview}
              onChange={handlePostReviewChange}
              onBlur={handlePostReviewBlurChange}
              onFocus={handlePostReviewFocus}
              showError={postReviewError}
              placeholder='Give a brief description about your company'
              rows={8}
              helperText={postReviewError ? 'This is a mandatory field' : ''}
            />
            <p className='body-xs mb-1'>Upto 500 characters</p>
            <div className='div-space-between mt-3'>
              <div className='w-33'>
                <Button
                  label='Cancel'
                  className={styles['cancel-button']}
                  onClick={handleCancel}
                />
              </div>
              <div className='w-60'>
                <Button
                  label='Post Review'
                  className={styles['post-button']}
                  type='submit'
                  disabled={postReviewError}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
