import React from 'react';
import { ReactComponent as CameraIconSVG } from '../../../../assets/iconSvg/camera.svg';
import styles from './ImagePreview.module.css';

const ImagePreview = props => {

  const { preview, handleImageChange, shape, image } = props;


  return (
    <div
      className={
        shape === 'circle'
          ? styles['round-border-img-container']
          : styles['square-img-container']
      }
    >
      <img
        src={preview}
        alt='File Preview'
        className={`${shape === 'circle'
          ? styles['round-border-preview']
          : styles['custom-preview']
          }`}
      />
      <div className={styles['icon-div']}>
        <label htmlFor='logo-upload'>
          <CameraIconSVG className={styles['camera-icon']} />
        </label>
        <input
          id='logo-upload'
          type='file'
          onChange={handleImageChange}
          accept='image/*'
          className={styles['hidden-input']}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
