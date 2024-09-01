import React, { useEffect, useState } from 'react';
import { ReactComponent as UploadImageIconSVG } from '../../../../assets/iconSvg/upload_image.svg';
import ImagePreview from './ImagePreview';
import styles from './UploadLogo.module.css';
import { getSingnedUrl } from '../../../../apiMethods/api';

const UploadLogo = props => {
  const { shape, label, name, onImageUpload, preview: initialPreview } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setPreview(initialPreview);
  }, [initialPreview]);

  const handleImageChange = async (event) => {
    // const file = event.target.files[0];
    if (event) {
      // setSelectedImage(file);
      // const bloburl = URL.createObjectURL(file)

      const file = event.target.files[0];
      const apiImgUrl = await getSingnedUrl(event.target.files[0]?.name, file);

      // console.log(URL.createObjectURL(event.target.files[0]));
      // const reader = new FileReader();
      setSelectedImage(file);
      onImageUpload(apiImgUrl);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // onImageUpload(bloburl);
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

  const getFormContent = () => {
    return (
      <>
        <p className='body-sm mb-1'>{label}</p>
        {!preview ? (
          <div className='w-fc'>
            <label
              htmlFor={name}
              className={`${shape === 'circle'
                ? styles['circle-file-upload']
                : styles['rectangle-file-upload']
                } 
                `}
            >
              <UploadImageIconSVG className={styles['addImageIcon']} />
            </label>
            <input
              id={name}
              name={name}
              type='file'
              onChange={handleImageChange}
              accept='image/*'
              className={styles['hidden-input']}
              hidden
            />
          </div>
        ) : (
          <ImagePreview
            preview={preview}
            handleImageChange={handleImageChange}
            shape={shape}
            name={name}
          />
        )}
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit} className='div-col-start'>
      {getFormContent()}
      <p className={`helper-text mt-2`}>(only .jpeg/.png | upto 5mb)</p>
    </form>
  );
};

export default UploadLogo;
