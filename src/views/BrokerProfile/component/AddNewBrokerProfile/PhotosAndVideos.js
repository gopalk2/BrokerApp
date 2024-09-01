import React from 'react';
import UploadImage from './UploadImage';
import UploadVideo from './UploadVideo';

const PhotosAndVideos = () => {
  return (
    <div className='100'>
      <p className='body-md mb-2'>
        {`Upload Images (Upto 5 images | .jpg / .png | < 5mb)`}
      </p>
      <div className='col-auto ml-3 mb-4'>
        <UploadImage name='upload-photo' />
      </div>
      <p className='body-md mb-2'>{`Upload intro Video (.mp4 / .mpeg | < 500mb)`}</p>
      <div className='col-auto div-space-start ml-3 mb-3'>
        <UploadVideo name='upload-video' />
      </div>
    </div>
  );
};

export default PhotosAndVideos;
