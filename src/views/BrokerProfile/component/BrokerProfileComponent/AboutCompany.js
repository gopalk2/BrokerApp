import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DealDoneIconSVG } from '../../../../assets/iconSvg/deal.svg';
import { ReactComponent as ExperienceIconSVG } from '../../../../assets/iconSvg/experience.svg';
import { ReactComponent as AchievementIconSVG } from '../../../../assets/iconSvg/medal.svg';
import { ReactComponent as SpaceIconSVG } from '../../../../assets/iconSvg/space.svg';
import Badge from '../../../../components/Badge';
import styles from './AboutCompany.module.css';

const AboutCompany = ({ data }) => {

  const { aboutCompany, yearsOfExperience, totalClientsServed, totalDealsClosed, activeListing, pastClients } = data
  const pastClientsArray = pastClients?.split(', ');
  // console.log(pastClientsArray)
  const badge = (
    <div className={styles['invitation-section-div']}>
      <p className='mb-0'>
        <ExperienceIconSVG className={styles['experience-icon']} /> {yearsOfExperience} Years Experience
        {/* <ExperienceIconSVG className={styles['experience-icon']} /> 12 Years Experience */}
      </p>
      <span className='m-0'>
        <span className={styles['dot']}></span>
      </span>
      <p className='mb-0'>
        <SpaceIconSVG className={styles['space-icon']} /> {activeListing} listings
      </p>
      <span className='m-0'>
        <span className={styles['dot']}></span>
      </span>
      <p className='mb-0'>
        <AchievementIconSVG className={styles['achievement-icon']} /> {totalClientsServed} clients served
      </p>
      <span className='m-0'>
        <span className={styles['dot']}></span>
      </span>
      <p className='mb-0'>
        <DealDoneIconSVG className={styles['deal-icon']} /> {totalDealsClosed} deals closed
      </p>
    </div>
  );

  return (
    <div className='w-100'>
      <div className={styles['about-border-container']}>
        <p className={styles['heading']}>About the company</p>
      </div>

      <div className={styles['about-border-container']}>
        <Badge
          // label={aboutCompany}
          label={badge}
          variant='square basic-grey'
          className={styles['badge-text']}
        />
        <p className='input-field-md mt-2'>
          {/* {data.aboutCompany}{' '} */}
          {aboutCompany ? aboutCompany : ''}
          <Link className='link-md' to='#'>
            read more
          </Link>
        </p>
      </div>

      <div className='mt-3'>
        <p className={styles['heading']}>past Clients</p>
        <div className='d-flex f-wrap'>
          {
            pastClientsArray?.map((item, index) => (
              <Badge
                label={item}
                variant='square basic-grey'
                className={styles['badge-text']}
                key={index}
              />
            ))
          }
        </div>
        {/* <p className={styles['heading']}>{data.pastClients.label}</p>
        <div className='d-flex f-wrap'>
          {data.pastClients.value.map((item, index) => (
            <Badge
              label={item.client}
              variant='square basic-grey'
              className={styles['badge-text']}
              key={index}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutCompany;
