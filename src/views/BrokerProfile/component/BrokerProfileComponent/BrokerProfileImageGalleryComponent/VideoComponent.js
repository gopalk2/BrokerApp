import React, { useState } from 'react';
import { ReactComponent as PalyIconSVG } from '../../../../../assets/iconSvg/play.svg';
import spaceImage from '../../../../../assets/images/spaceImage1.jpeg';
import styles from './VideoComponent.module.css';

const VideoComponent = props => {

  const { videoUrl, className } = props;
  const [showFullVideo, setShowFullVideo] = useState(false);

  const toggleVideo = () => {
    setShowFullVideo(!showFullVideo);
  };

  return (
    <div>
      {showFullVideo ? (
        <video controls autoPlay className={`${styles['video']} ${className}`}>
          <source src={videoUrl} type='video/mp4' />
        </video>
      ) : (
        <div
          className={`${styles['video-card']} ${className}`}
          onClick={toggleVideo}
        >
          <img
            // src={spaceImage}
            alt='Video Thumbnail'
            className={`${styles['img']} ${className}`}
          />
          <div className={styles['video-text']}>
            <div className='div-center h-100'>
              <div className={styles['white-circle']}>
                <PalyIconSVG className={styles['paly-icon']} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
