import React from 'react';
import { ReactComponent as UploadImageIconSVG } from '../../../../assets/iconSvg/upload_image.svg';
import ImagePreview from './ImagePreview';
import styles from './UploadLogo.module.css';

const UploadLogo = props => {

  const { shape, preview, handleImageChange, image } = props;

  const getFormContent = shape => {

    return (
      <>
        {!preview ? (
          <div className='w-fc'>
            <label
              htmlFor='logo-upload'
              className={`${shape === 'circle'
                ? styles['circle-file-upload']
                : styles['rectangle-file-upload']
                } 
            `}
            >
              <UploadImageIconSVG className={styles['addImageIcon']} />
            </label>
            <input
              id='logo-upload'
              type='file'
              onChange={handleImageChange}
              accept='image/*'
              className={styles['hidden-input']}
            />
          </div>
        ) : (
          <ImagePreview
            // image={image}
            preview={preview}
            handleImageChange={handleImageChange}
            shape={shape}
          />
        )}
      </>
      // <>
      //   {!preview ? (
      //     <div className='w-fc'>
      //       <label
      //         htmlFor='logo-upload'
      //         className={`${shape === 'circle'
      //           ? styles['circle-file-upload']
      //           : styles['rectangle-file-upload']
      //           } 
      //       `}
      //       >
      //         <UploadImageIconSVG className={styles['addImageIcon']} />
      //       </label>
      //       <input
      //         id='logo-upload'
      //         type='file'
      //         onChange={handleImageChange}
      //         accept='image/*'
      //         className={styles['hidden-input']}
      //       />
      //     </div>
      //   ) : (
      //     <ImagePreview
      //       image={image}
      //       // preview={preview}
      //       handleImageChange={handleImageChange}
      //       shape={shape}
      //     />
      //   )}
      // </>
    );
  };
  return <>{getFormContent(shape)}</>;
};

export default UploadLogo;
