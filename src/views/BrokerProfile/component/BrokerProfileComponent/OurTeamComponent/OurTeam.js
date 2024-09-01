import React from 'react';
// import { useSelector } from 'react-redux';
import OuterCard from '../../../../../components/OuterCard';
// import { ourTeamCardData } from '../../../config/brokerProfileData';
import styles from './OurTeam.module.css';
import OurTeamCard from './OurTeamCard';

const OurTeam = ({ data }) => {

  const { team } = data
  // const brokerData = useSelector(state => state.brokerHome.featuredBroker);

  // console.log(team)

  return (
    <div className='w-100'>
      <div className={styles['our-team-border-container']}>
        <p className='h2-text mb-0'>Meet our Teams</p>
      </div>
      <div className={styles['our-team-card-container']}>
        {team?.map(value => (
          <OuterCard className='mt-3 p-0' key={value.id}>
            <OurTeamCard data={value} />
          </OuterCard>
        ))}
        {/* {ourTeamCardData.map(value => (
          <OuterCard className='mt-3 p-0' key={value.id}>
            <OurTeamCard data={value} />
          </OuterCard>
        ))} */}
      </div>
    </div>
  );
};

export default OurTeam;
