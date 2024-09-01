import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as VideoUploadIconSVG } from '../../../../assets/iconSvg/video_upload.svg';
import { brokerProfileAction } from '../../../../store/broker-profile-slice';
import VideoComponent from '../BrokerProfileComponent/BrokerProfileImageGalleryComponent/VideoComponent';
import styles from './UploadLogo.module.css';
import { getSingnedUrl } from '../../../../apiMethods/api';


const UploadVideo = props => {
  const { shape, label, name } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const videos = useSelector(state => state.brokerProfile.reraTypes.videoPath);


  // useEffect(() => {
  //   if (videos.length > 0) {
  //     const firstVideo = videos[0];
  //     setPreview(firstVideo.src);
  //   }
  // }, [videos]);
  useEffect(() => {
    setPreview(videos);
}, [videos]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const id = nanoid();
      setSelectedImage(file);
      const apiImgUrl = await getSingnedUrl(event.target.files[0]?.name, file);
      // const bloburl = URL.createObjectURL(file);
      setPreview(apiImgUrl);

      dispatch(brokerProfileAction.addVideo({ id, src: apiImgUrl, file }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (selectedImage) {
      console.log('Video uploaded');
    } else {
      console.log('No video selected');
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
              className={`${
                shape === 'circle'
                  ? styles['circle-file-upload']
                  : styles['rectangle-file-upload']
              } 
                `}
            >
              <VideoUploadIconSVG className={styles['addImageIcon']} />
            </label>
            <input
              id={name}
              name={name}
              type='file'
              onChange={handleImageChange}
              accept='video/*'
              className={styles['hidden-input']}
              hidden
            />
          </div>
        ) : (
          <VideoComponent
            videoUrl={preview}
            className={styles['video-component']}
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

export default UploadVideo;
