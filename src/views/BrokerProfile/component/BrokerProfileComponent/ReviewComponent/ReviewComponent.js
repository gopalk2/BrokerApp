import React, { useEffect, useState } from 'react';
import FormSubmitSuccessfully from '../../FormSubmitSuccessfully';
import Rating from './Rating';
import WriteReview from './WriteReview';

const ReviewComponent = (data) => {

  const { brokerReviews } = data
  const [writeReview, setWriteReview] = useState('rating');

  useEffect(() => {
    let timeout;
    if (writeReview === 'post review') {
      timeout = setTimeout(() => {
        setWriteReview('write review');
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [writeReview]);

  let component;
  if (writeReview === 'rating') {
    component = <Rating setWriteReview={setWriteReview} brokerReviews={brokerReviews} />;
  } else if (writeReview === 'write review') {
    component = <WriteReview setWriteReview={setWriteReview} />;
  } else if (writeReview === 'post review') {
    component = (
      <FormSubmitSuccessfully message={'Your review has been submitted'} />
    );
  }

  return <div className='d-flex'>{component}</div>;
};

export default ReviewComponent;
