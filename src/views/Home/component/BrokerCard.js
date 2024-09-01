import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrowIconSVG } from '../../../assets/iconSvg/arrow.svg';
import { ReactComponent as CallIconSVG } from '../../../assets/iconSvg/call.svg';
import { ReactComponent as DealIconSVG } from '../../../assets/iconSvg/deal.svg';
import { ReactComponent as EmailIconSVG } from '../../../assets/iconSvg/email.svg';
import { ReactComponent as ExperienceIconSVG } from '../../../assets/iconSvg/experience.svg';
import { ReactComponent as AchievementIconSVG } from '../../../assets/iconSvg/medal.svg';
import { ReactComponent as SpaceIconSVG } from '../../../assets/iconSvg/space.svg';
import { ReactComponent as StarIconSVG } from '../../../assets/iconSvg/star_filled.svg';
import Button from '../../../components/Buttons/Button';
import OuterCard from '../../../components/OuterCard';
import styles from './BrokerCard.module.css';

const BrokerCard = props => {

  const { data, type } = props;
  // console.log(data)

  const setBrokerId = (data) => {
    sessionStorage.setItem('BrokerId', data?.id)
  }

  const setUrl = () => {
    // console.log(url)
    const regex = /Faker=>(https?:\/\/[^\s]+)/;

    // const newurl = data?.companyLogo?.match(regex)[1];
    // console.log(newurl);
    // return newurl;
  }

  return (
    <div className={styles['broker-card']}>
      <OuterCard className={styles['card']}>
        <div className='mt-3 b-bottom'>
          <div className='d-flex w-100'>
            <div className='w-mc mr-3'>
              <img
                src={data?.companyLogo}
                alt='company-logo'
                className={styles['company-contact-img']}
              />
            </div>
            <div className='w-mc'>
              {type === 'broker' ? (
                <p className={styles['heading']}>{data?.organization}</p>
              ) : (
                <p className={styles['heading']}>{data?.name}</p>
              )}

              {type === 'broker' ? (
                <p className='input-field-sm mb-1'>
                  <StarIconSVG className={styles['star-icon']} />
                  {data?.rating} / ({data?.reviews} reviews)
                </p>
              ) : (
                <p className='input-field-sm mb-1'>
                  <SpaceIconSVG className={styles['space-icon']} />
                  {data?.organization}
                </p>
              )}

              <p className='input-field-sm mb-1'>
                <EmailIconSVG className={styles['space-icon']} />
                {data?.email}
              </p>
              <p className='input-field-sm'>
                <CallIconSVG className={styles['space-icon']} />
                {data?.contactNo}
              </p>
            </div>
          </div>
        </div>

        <div className='div-space-between  pt-3'>
          <div className='d-flex'>
            <div className='w-mc'>
              <ExperienceIconSVG className={styles['experience-icon']} />
            </div>
            <div className='w-mc'>
              <p className='body-xs mb-0'>Experience</p>
              <p className={styles['broker-modal-paid-detail']}>
                {data?.yearsOfExperience}
              </p>
            </div>
          </div>

          <div className='ml-3 d-flex'>
            <div className='w-mc'>
              <AchievementIconSVG className={styles['experience-icon']} />
            </div>
            <div className='w-mc'>
              <p className='body-xs mb-0'>Clients served</p>
              <p className={styles['broker-modal-paid-detail']}>
                {data?.totalClientsServed}
              </p>
            </div>
          </div>

          <div className='ml-3 d-flex'>
            <div className='w-mc'>
              <DealIconSVG className={styles['experience-icon']} />
            </div>
            <div className='w-mc'>
              <p className='body-xs mb-0'>Deals closed </p>
              <p className={styles['broker-modal-paid-detail']}>
                {data?.totalDealsClosed}
              </p>
            </div>
          </div>
        </div>
      </OuterCard>

      <div className={styles['card-footer']}>
        <Link to='/broker-profile'>
          <Button
            label='View Details'
            icon={<RightArrowIconSVG className={styles['arrow-icon']} />}
            iconPosition='right'
            variant='transparent'
            className={styles['card-button']}
            onClick={() => { setBrokerId(data) }}
          />
        </Link>
      </div>
    </div>
  );
};

export default BrokerCard;
