import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIconSVG } from '../../../../assets/iconSvg/delete.svg';
import { ReactComponent as PickImageIconSVG } from '../../../../assets/iconSvg/photos.svg';
import { ReactComponent as UploadImageIconSVG } from '../../../../assets/iconSvg/upload_image.svg';
import Button from '../../../../components/Buttons/Button';
import Modal from '../../../../components/Modal';
import { brokerProfileAction } from '../../../../store/broker-profile-slice';
import styles from './UploadImage.module.css';
import { getSingnedUrl } from '../../../../apiMethods/api';

const UploadImage = props => {
  const { name, className } = props;
  const dispatch = useDispatch();
  const images = useSelector(state => state.brokerProfile.reraTypes.images);

  const [selectedImage, setSelectedImage] = useState(images);
  const [preview, setPreview] = useState(images?.map(image => image.image));
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  
  console.log(preview ,'preview');

  const handleImageChange = async (event) => {
    const files = event.target.files;
    const newSelectedImages = [...selectedImage];
    const newPreviews = [...preview];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const id = nanoid();
      newSelectedImages.push({ id, file });
      // const bloburl = URL.createObjectURL(file)
     
      const apiImgUrl = await getSingnedUrl(event.target.files[0]?.name, file);
      // const reader = new FileReader();
      // reader.onload = () => {
      newPreviews.push(apiImgUrl);
      setPreview([...newPreviews]);
      dispatch(brokerProfileAction.addImage({  image : apiImgUrl, }));
      // };
      // reader.readAsDataURL(file);
    }

    setSelectedImage([...newSelectedImages]);
  };

  const handleReplace = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const id = nanoid();
      const newSelectedImages = selectedImage?.map((image, i) =>
        i === index ? { id, file } : image
      );
      setSelectedImage(newSelectedImages);
      // const bloburl = URL.createObjectURL(file)
      // const reader = new FileReader();
      // reader.onload = () => {
        const apiImgUrl = await getSingnedUrl(e.target.files[0]?.name, file);

        const newPreviews = preview.map((preview, i) =>
          i === index ? apiImgUrl : preview
        );

        setPreview(newPreviews);
        dispatch(brokerProfileAction.replaceImage({ index, newImage: {  image: apiImgUrl} }));
      // };
      // reader.readAsDataURL(file);
    }
    setIsUserModalOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (selectedImage.length) {
      console.log('Selected Images:', selectedImage);
    } else {
      console.log('No images selected');
    }
  };

  const handleRemove = index => {
    const removedImageId = selectedImage[index].id;
    const newSelectedImages = selectedImage.filter((_, i) => i !== index);
    const newPreviews = preview.filter((_, i) => i !== index);
    dispatch(brokerProfileAction.removeImage(removedImageId));
    setSelectedImage(newSelectedImages);
    setPreview(newPreviews);
    setIsUserModalOpen(false);
  };

  const handleUserClick = event => {
    const rect = event.target.getBoundingClientRect();
    const clickedPosition = {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    };

    setModalPosition(clickedPosition);
    setIsUserModalOpen(true);
  };

  const getModalRemoveAndReplace = index => {
    return (
      <div className={styles['modal']}>
        <div className='b-bottom div-center h-30'>
          <p className='body-lg mb-0'>Replace Photo</p>
        </div>
        <div className='div-center p-2 h-70'>
          <div className={styles['circle']}>
            <Button
              icon={<DeleteIconSVG className={styles['delete-icon']} />}
              iconPosition='left'
              variant='transparent'
              onClick={() => handleRemove(index)}
            />
          </div>
          <label htmlFor={`${name}-${index}`} className={styles['circle']}>
            <PickImageIconSVG className={styles['pick-image']} />
          </label>
          <input
            id={`${name}-${index}`}
            type='file'
            onChange={e => handleReplace(e, index)}
            accept='image/*'
            className={styles['hidden-input']}
          />
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={`w-100 ${className}`}>
      <div className='d-flex'>
        {preview?.map((preview, index) => (
          <div className='col-auto mr-3' key={index}>
            <img
              src={preview}
              alt={`photo-${index}`}
              className={styles['img']}
              onClick={handleUserClick}
            />
            <Modal
              isOpen={isUserModalOpen}
              onClose={() => setIsUserModalOpen(false)}
              position={modalPosition}
              className='w-15 h-20 p-0'
            >
              {getModalRemoveAndReplace(index)}
            </Modal>
          </div>
        ))}
        <div className='col-auto'>
          <div className={styles['upload-logo-container']}>
            <label htmlFor={name} className={styles['custom-file-upload']}>
              <span>
                <UploadImageIconSVG className={styles['add-image']} />
              </span>
            </label>
            <input
              id={name}
              type='file'
              onChange={handleImageChange}
              accept='image/*'
              multiple
              className={styles['hidden-input']}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UploadImage;
