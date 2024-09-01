import React, { useEffect, useState } from 'react';
import { getSingnedUrl } from '../../../apiMethods/api';
import UploadLogo from './ImageUpload/UploadLogo';
import styles from './UploadImage.module.css';
import { useDispatch } from 'react-redux';

const UploadImage = props => {

  const { shape, onChangeImgChange, image } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);


  useEffect(() => {
    if (image) { setPreview(image) }
  }, [image]);

  const handleImageChange = async (event) => {
    if (event) {
      const file = event.target.files[0];
      const apiImgUrl = await getSingnedUrl(event.target.files[0]?.name, file);
      onChangeImgChange(apiImgUrl);



      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // setPreview(apiImgUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (selectedImage) {
      console.log('Image uploaded');
    } else {
      console.log('No image selected');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['image-upload-form']}>
      <div className='div-space-start w-25'>
        <p className='m-0 pr-1 body-sm'>Profile Image</p>
        <span className='helper-text'>( .jpeg/.png | upto 5mb)</span>
      </div>
      <div className={styles['upload-image-container']}>
        <UploadLogo
          shape={shape}
          // image={image}
          preview={preview}
          handleImageChange={handleImageChange}
        />
      </div>
    </form>
  );
};

export default UploadImage;
