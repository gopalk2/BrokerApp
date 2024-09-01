import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as GalleryIconSVG } from '../../../../../assets/iconSvg/photos.svg';
import PopModal from '../../../../../components/PopModal';
import { SpaceImageGallery } from '../../../config/brokerProfileData';
import styles from './BrokerProfileImageGallery.module.css';
import ImageGallery from './ImageGallery';
import VideoComponent from './VideoComponent';

const BrokerProfileImageGallery = ({ vedioPath }) => {

  const [openModal, setOpenModal] = useState(false);
  const data = useSelector(state => state.brokerProfile.gallery);

  // data && console.log(data)
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles['image-gallery']}>
      <div className='w-40'>
        <VideoComponent
          // videoUrl={ 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
          videoUrl={vedioPath ? vedioPath : ""}
        />
      </div>
      {data?.map((image, index) =>
        // {console.log(image)}
        index !== 1 && index !== 2 ? (
          <img
            src={image?.image}
            alt={`img`}
            className={styles['image']}
            key={image?.id}
          />
        ) : (
          index !== 2 && (
            <div
              className={styles['second-image']}
              key={index}
            >
              <img
                src={data[1]?.image}
                // alt={`space-${data[1]?.id}`}
                alt={`img`}
                className={styles['img']}
              />
              {data?.length > 2 && (
                <img
                  src={data[2]?.image}
                  // alt={`space-${data[2]?.id}`}
                  alt={`img`}
                  className={styles['img-II']}
                />
              )}
            </div>
          )
        )
      )}
      {/* {SpaceImageGallery.map((img, index) =>
        index !== 1 && index !== 2 ? (
          <img
            src={img.image}
            alt={`space-${img.id}`}
            className={styles['image']}
            key={img.id}
          />
        ) : (
          index !== 2 && (
            <div className={styles['second-image']} key={img.id}>
              <img
                src={SpaceImageGallery[1].image}
                alt={`space-${SpaceImageGallery[1].id}`}
                className={styles['img']}
              />
              {SpaceImageGallery.length > 2 && (
                <img
                  src={SpaceImageGallery[2].image}
                  alt={`space-${SpaceImageGallery[2].id}`}
                  className={styles['img-II']}
                />
              )}
            </div>
          )
        )
      )} */}
      <div className={styles['gallery-tag']}>
        <GalleryIconSVG className={styles['gallery-icon']} />
        <span className='white-text' onClick={handleOpenModal}>
          Show all photos
        </span>
      </div>
      <PopModal
        isOpen={openModal}
        onClose={handleCloseModal}
        size={'lg'}
        className={styles['pop-modal']}
      >
        <ImageGallery onClose={handleCloseModal} data={data} />
        {/* <ImageGallery onClose={handleCloseModal} data={data} /> */}
      </PopModal>
    </div>
  );
};

export default BrokerProfileImageGallery;
