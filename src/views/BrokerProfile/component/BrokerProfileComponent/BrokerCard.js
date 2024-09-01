import React, { useState } from 'react';
import { ReactComponent as CallIconSVG } from '../../../../assets/iconSvg/call.svg';
import { ReactComponent as CopyIconSVG } from '../../../../assets/iconSvg/copy.svg';
import { ReactComponent as DiamondIconSVG } from '../../../../assets/iconSvg/diamond.svg';
import { ReactComponent as EmailIconSVG } from '../../../../assets/iconSvg/email.svg';
import { ReactComponent as FillStarIconSVG } from '../../../../assets/iconSvg/star_filled.svg';
import { ReactComponent as EmptyStarIconSVG } from '../../../../assets/iconSvg/star_outlined.svg';
import Badge from '../../../../components/Badge';
import Button from '../../../../components/Buttons/Button';
import Modal from '../../../../components/Modal';
import styles from './BrokerCard.module.css';

const BrokerCard = ({ data }) => {
  // console.log(data)
  const stars = Array.from({ length: 5 }, (_, index) => index);

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalContent, setModalContent] = useState(null);

  const openModal = (event, content) => {
    const rect = event.target.getBoundingClientRect();
    const clickedPosition = {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    };

    setModalPosition(clickedPosition);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleCallClick = event => {
    openModal(event, 'call');
  };

  const handleEmailClick = event => {
    openModal(event, 'email');
  };

  const handleCopy = copyText => {
    navigator.clipboard.writeText(copyText);
  };

  let modalView;
  if (modalContent === 'call') {
    modalView = (
      <span className='body-sm'>
        {/* <CallIconSVG className={styles['small-call-icon']} /> +{data.phone} */}
        <CallIconSVG className={styles['small-call-icon']} /> {data?.contactNo}
        <Button
          icon={<CopyIconSVG className={styles['copy-icon']} />}
          iconPosition='right'
          variant='transparent'
          // onClick={() => handleCopy(data.phone)}
          onClick={() => handleCopy(data?.contactNo)}
        />
      </span>
    );
  } else if (modalContent === 'email') {
    modalView = (
      <span className='body-sm'>
        <EmailIconSVG className={styles['small-call-icon']} /> {data?.email}
        <Button
          icon={<CopyIconSVG className={styles['copy-icon']} />}
          iconPosition='right'
          variant='transparent'
          onClick={() => handleCopy(data?.email)}
        />
      </span>
    );
  }

  const getStarType = index => {
    const starRating = parseInt(data?.rating);
    const wholeNumberRating = Math.min(
      Math.floor(starRating),
      stars.length - 1
    );

    switch (true) {
      case index < wholeNumberRating:
        return <FillStarIconSVG className={styles['start-icon']} />;
      default:
        return <EmptyStarIconSVG className={styles['start-icon']} />;
    }
  };

  const setUrl = () => {
    // console.log(url)
    const regex = /Faker=>(https?:\/\/[^\s]+)/;
    const newurl = data?.companyLogo?.match(regex)[1];
    // console.log(newurl);
    return newurl;
  }

  return (
    <div className='w-100'>
      <div className={styles['broker-detail']}>
        <div className='w-mc mr-5'>
          <img
            src={data?.companyLogo}
            alt='broker-logo'
            className={styles['broker-logo']}
          />
        </div>
        <div className='w-100'>
          <div className='w-100 d-flex'>
            <div className='w-80'>
              <p className='h2-text mb-1 pt-2'>{data?.name}</p>
            </div>
            <div className='w-20 text-end'>
              <Button
                icon={<CallIconSVG className={styles['call-icon']} />}
                iconPosition='right'
                variant='transparent'
                onClick={handleCallClick}
              />
              <Button
                icon={<EmailIconSVG className={styles['call-icon']} />}
                iconPosition='right'
                variant='transparent'
                onClick={handleEmailClick}
              />
              <Modal
                isOpen={!!modalContent}
                onClose={closeModal}
                position={modalPosition}
                className='w-fc p-1'
              >
                {modalView}
              </Modal>
            </div>
          </div>
          <div className='w-100 d-flex'>
            <div className='w-mc'>
              {stars?.map(index => (
                <Button
                  icon={getStarType(index)}
                  iconPosition='right'
                  variant='transparent'
                  key={index}
                />
              ))}
            </div>
            <div className='w-mc'>
              <p className={styles['review-text']}>
                {data?.rating ? data?.rating : 0}/5 (1024 reviews)
              </p>
            </div>
          </div>
          <div className='w-100 d-flex'>
            {data?.cities?.map(item => (
              <Badge
                label={item?.city?.name}
                variant='user-badge basic-grey'
                className={styles['location-badge']}
                key={item?.cityId}
              />
            ))}
            {/* {data?.location?.map(item => (
              <Badge
                label={item?.location}
                variant='user-badge basic-grey'
                className={styles['location-badge']}
                key={item?.id}
              />
            ))} */}
          </div>
        </div>
      </div>
      <div className={styles['specialization-container']}>
        <p className='body-lg'>
          <DiamondIconSVG className={styles['diamond-icon']} /> Specialization
        </p>
        <div className='d-flex '>
          {data?.specializations?.map(item => (
            <Badge
              label={item?.specialization?.name}
              variant='square basic-grey'
              className={styles['specialization-badge']}
              key={item?.companyId}
            />
          ))}
          {/* {data?.specialization?.map(item => (
            <Badge
              label={item?.label}
              variant='square basic-grey'
              className={styles['specialization-badge']}
              key={item?.id}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;
