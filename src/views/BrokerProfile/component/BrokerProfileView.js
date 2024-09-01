import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../apiMethods/api';
import OuterCard from '../../../components/OuterCard';
// import { brokerDetails } from '../config/brokerProfileData';
import AboutCompany from './BrokerProfileComponent/AboutCompany';
import BrokerCard from './BrokerProfileComponent/BrokerCard';
import BrokerProfileImageGallery from './BrokerProfileComponent/BrokerProfileImageGalleryComponent/BrokerProfileImageGallery';
import ConnectWithUsForm from './BrokerProfileComponent/ConnectWithUsForm';
import OurListing from './BrokerProfileComponent/OurListingComponent/OurListing';
import OurTeam from './BrokerProfileComponent/OurTeamComponent/OurTeam';
import ProfessionalInformation from './BrokerProfileComponent/ProfessionalInformation';
import ReviewComponent from './BrokerProfileComponent/ReviewComponent/ReviewComponent';
import styles from './BrokerProfileView.module.css';
import FormSubmitSuccessfully from './FormSubmitSuccessfully';
import { useDispatch, useSelector } from 'react-redux';
import { brokerProfileAction } from '../../../store/broker-profile-slice';
import { get_BrokerReview_Data } from '../../../store/action/allAction';

const BrokerProfileView = () => {

  const dispatch = useDispatch();
  const brokerId = sessionStorage.getItem('BrokerId') ? sessionStorage.getItem('BrokerId') : ''
  const [formSubmit, setFormSubmit] = useState(false);
  const [brokerData, setBrokerData] = useState({})
  const [professionalInfo, setProfessionalInfo] = useState([]);

  // const [brokerReviews, setBrokerReviews] = useState([]);
  const brokerReviews = useSelector((state) => state.AllReducer.brokerReview);
  // brokerReviews && console.log(brokerReviews)

  useEffect(() => {
    let timeout;
    if (formSubmit) {
      timeout = setTimeout(() => {
        setFormSubmit(false);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [formSubmit]);

  useEffect(() => {
    if (brokerId) {
      // getReviews();
      dispatch(get_BrokerReview_Data(brokerId))
      getBrokerData();
    }
  }, [brokerId]);

  const getBrokerData = async () => {
    const keysToExtract = ['panNo', 'linkedInProfileUrl', 'email', 'contactNo', 'website', 'headquaterAddress', 'reraRegistrationNo', 'gstNo'];

    const res = await fetchData(`brokers/${brokerId}`);
    if (res) {
      const obj = extractKeyValuePairs(res, keysToExtract);
      // console.log(obj); 
      setProfessionalInfo(obj)
      setBrokerData(res);
      dispatch(brokerProfileAction.setUpdateGallary(res?.images));
    } else {
      setBrokerData({});
      dispatch(brokerProfileAction.setUpdateGallary({}));
    }
    // console.log(res)
  }

  // const getReviews = async () => {
  //   const res = await fetchData(`brokers/${brokerId}/reviews`);
  //   // if (res) setBrokerReviews(res); else setBrokerReviews([]);
  //   console.log('review', res)
  // }

  function extractKeyValuePairs(obj, keys) {
    return keys.map(key => ({ head: key, value: obj[key] }));
    // return keys.map(key => ({ [key]: obj[key] }));
  }

  return (
    <div className={styles['broker-profile']}>
      <BrokerProfileImageGallery vedioPath={brokerData?.videoPath} />
      <div className='w-100 mt-5 pb-3 d-flex'>
        <div className={styles['broker-details-container']}>
          <div className='w-100 mb-4'>
            <OuterCard className='w-100 p-4'>
              {/* <BrokerCard data={brokerDetails} /> */}
              <BrokerCard data={brokerData} />
            </OuterCard>
          </div>

          <div className='w-100 mb-4'>
            <OuterCard className='w-100 p-4'>
              <AboutCompany data={brokerData} />
              {/* <AboutCompany data={brokerDetails} /> */}
            </OuterCard>
          </div>
          <div className='w-100 mb-4'>
            <OuterCard className='w-100 p-4'>
              <OurListing listingData={brokerData?.properties} />
            </OuterCard>
          </div>
          <div className='w-100'>
            <OuterCard className='w-100 p-4'>
              <OurTeam data={brokerData} />
            </OuterCard>
          </div>
        </div>
        <div className={styles['professional-details-container']}>
          <div className='w-100 mb-4'>
            <OuterCard className='w-100 p-4'>
              {professionalInfo && <ProfessionalInformation professionalInfo={professionalInfo} />}
            </OuterCard>
          </div>
          <div className='w-100 mb-4'>
            {!formSubmit ? (
              <OuterCard className={styles['form-card']}>
                <ConnectWithUsForm
                  setFormSubmit={setFormSubmit}
                  formSubmit={formSubmit}
                />
              </OuterCard>
            ) : (
              <OuterCard className='w-100 p-4'>
                <FormSubmitSuccessfully
                  message={'Your form has been submitted'}
                />
              </OuterCard>
            )}
          </div>
          <div className='w-100 mb-4'>
            <OuterCard className='w-100 p-4'>
              <ReviewComponent brokerReviews={brokerReviews} />
            </OuterCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerProfileView;
