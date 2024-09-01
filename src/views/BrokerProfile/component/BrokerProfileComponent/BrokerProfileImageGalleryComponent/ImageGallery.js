import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ReactComponent as WrongIconSVG } from '../../../../../assets/iconSvg/close.svg';
import Button from '../../../../../components/Buttons/Button';
import styles from './ImageGallery.module.css';

const ImageGallery = props => {

  const { onClose, data } = props;
  // console.log(data)
  return (
    <div className={styles['image-container']}>
      <Carousel className='w-100 h-100' slide={false}>
        {data?.map((image, index) => (
          console.log(image?.image),
          <Carousel.Item interval={10000} className='h-100' key={index}>
            <img
              src={image?.image}
              alt={`space-img-${index}`}
              className={styles['space-img']}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Button
        icon={<WrongIconSVG className={styles['close-icon']} />}
        iconPosition='right'
        variant='transparent'
        onClick={onClose}
        className={styles['tag-icon']}
      />
    </div>
  );
};

export default ImageGallery;
