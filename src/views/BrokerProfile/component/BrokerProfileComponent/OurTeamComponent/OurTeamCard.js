import React from 'react';
import { ReactComponent as CallIconSVG } from '../../../../../assets/iconSvg/call.svg';
import { ReactComponent as DealIconSVG } from '../../../../../assets/iconSvg/deal.svg';
import { ReactComponent as EmailIconSVG } from '../../../../../assets/iconSvg/email.svg';
import styles from './OurTeamCard.module.css';

const OurTeamCard = props => {
  const { data } = props;

  return (
    <div className='w-100'>
      <div className={styles['our-team-detail']}>
        <div className='d-flex'>
          <div className='w-mc mr-5'>
            <img
              src={data.image}
              alt='our-team-logo'
              className={styles['our-team-logo']}
            />
          </div>

          <div className='w-100'>
            <div className='w-100'>
              <p className={styles['heading-name-text']}>{data.name}</p>
              <div className='w-100'>
                <p className='mb-0'>
                  <DealIconSVG className={styles['small-call-icon']} />
                  <span className='body-sm'>{data.designation}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-100 mt-2'>
          <p className='mb-1'>
            <EmailIconSVG className={styles['small-call-icon']} />
            <span className='body-sm'>{data.email}</span>
          </p>
          <p className='mb-0'>
            <CallIconSVG className={styles['small-call-icon']} />
            {/* <span className='body-sm'>{data.contactNo}</span> */}
            <span className='body-sm'>{data.phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
