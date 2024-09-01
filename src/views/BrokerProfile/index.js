import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUpadate, fetchData } from '../../apiMethods/api';
import BrokerFooter from '../../components/BrokerFooter';
import BrokerHeaderNav from '../../components/BrokerHeaderNav';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import { brokerProfileAction } from '../../store/broker-profile-slice';
import CompanyDetails from './component/AddNewBrokerProfile/CompanyDetails';
import Listings from './component/AddNewBrokerProfile/Listing/Listings';
import PhotosAndVideos from './component/AddNewBrokerProfile/PhotosAndVideos';
import ProfessionalDetails from './component/AddNewBrokerProfile/ProfessionalDetails';
import TeamDetails from './component/AddNewBrokerProfile/TeamDetails/TeamDetails';
import BrokerProfileFormHeader from './component/BrokerProfileFormHeader';
import BrokerProfileView from './component/BrokerProfileView';
import { footerBlogList, footerCompanyList } from './config/brokerProfileData';
import styles from './style.module.css';
import { toastifySuccess } from '../../Comman/AlertMsg';
// import { brokerProfileAction } from '../../store/broker-profile-slice';


const BrokerProfile = () => {

  const [modal, setModal] = useState(false);
  const [brokerProfileTab, setBrokerProfileTab] = useState('Company Details');
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  // const [brokerdata ,setBrokerData] = useState(false);
  const isLoggedIn = useSelector(state => state.loginSignup.loggedIn);

  const professionalDetails = useSelector((state) => state.brokerProfile.reraTypes);

  const fetchReraTypesData = async () => {
    try {
      const response = await fetchData('/brokers/my');
      // console.log(response, 'response');
      if (response) {
        dispatch(brokerProfileAction.setReraTypes(response));
      }
    } catch (error) {
      console.error('Error fetching RERA types:', error);
    }
  };
 
  console.log(professionalDetails.specializations[0].specializationId ,'special');
 
  const handleDrawer = () => {
    setModal(true);
    if (window.location.pathname === '/broker-profile' && isLoggedIn) {
      fetchReraTypesData();
    }
  };

  const handleDrawerClose = () => {
    setModal(false);
    dispatch(brokerProfileAction.setReraTypes(''));
  };

 

  const modalHeading = (
    <BrokerProfileFormHeader
      brokerProfileTab={brokerProfileTab}
      setBrokerProfileTab={setBrokerProfileTab}
      onClose={handleDrawerClose}
    />
  );

  let tabComponent;
  if (brokerProfileTab === 'Company Details') {
    tabComponent = <CompanyDetails setDisabled={setDisabled} />;
  } else if (brokerProfileTab === 'Professional Details') {
    tabComponent = <ProfessionalDetails />;
  } else if (brokerProfileTab === 'Listings') {
    tabComponent = <Listings />;
  } else if (brokerProfileTab === 'Team Details') {
    tabComponent = <TeamDetails />;
  } else if (brokerProfileTab === 'Photos & Videos') {
    tabComponent = <PhotosAndVideos />;
  }

  const handleSaveAndExit = () => {
    // const cityIds = (professionalDetails.cities || []).filter(city => city !== null).map((_, index) => index);
    const videoUrl = professionalDetails.videoPath;
    const properties = (professionalDetails.properties || []).map(property => ({
      image: property?.image || '',
      name: property?.name || '',
      // location: property?.location || '',
      locationId: 1,
      propertyType: 'commercial',
      designation: property?.designation || '',
      leasableArea: property?.leasableArea || null
    }));
    const team = (professionalDetails.team || []).map(member => ({
      image: member?.image || '',
      name: member?.name || '',
      email: member?.email || '',
      contactNo: member?.contactNo || '',
      startingPrice: member?.startingPrice || ''
    }));
    const images = (professionalDetails.images || []).map(img => ({
      image: img.image || '',
    }));

    const payload = {
      name: professionalDetails?.name || '',
      email: professionalDetails?.email || '',
      contactNo: professionalDetails?.contactNo || '',
      website: professionalDetails?.website || '',
      headquaterAddress: professionalDetails?.headquaterAddress || '',
      aboutCompany: professionalDetails?.aboutCompany || '',
      reraId: professionalDetails?.reraId || null,
      reraRegistrationNo: professionalDetails?.reraRegistrationNo || '',
      panNo: professionalDetails?.panNo || '',
      gstNo: professionalDetails?.gstNo || '',
      yearsOfExperience: professionalDetails?.yearsOfExperience || 0,
      companyLogo: professionalDetails?.companyLogo,
      activeListing: professionalDetails?.activeListing || 0,
      totalClientsServed: professionalDetails?.totalClientsServed || 0,
      totalDealsClosed: professionalDetails?.totalDealsClosed || 0,
      pastClients: Array.isArray(professionalDetails.pastClients) ? professionalDetails.pastClients.join(',') : professionalDetails.pastClients || '',
      videoPath: videoUrl,
      team: team,
      images: images,
      properties: properties,
      specializations: [professionalDetails.specializations[0].specializationId],
      // specializations: [1],
      // cities: cityIds,
      linkedInProfileUrl: professionalDetails?.linkedInProfileUrl
    };
    AddUpadate('/brokers/my', payload).then((res) => {
      if (res.status) {
        // console.log(res, 'response');
       toastifySuccess('Broker Updated Successfully')
      }
    }).catch(error => {
      console.error('Error updating broker profile:', error);
    });
    setModal(false);
  };

  const handleNext = () => {
    switch (brokerProfileTab) {
      case 'Company Details':
        return setBrokerProfileTab('Professional Details');
      case 'Professional Details':
        return setBrokerProfileTab('Listings');
      case 'Listings':
        return setBrokerProfileTab('Team Details');
      case 'Team Details':
        return setBrokerProfileTab('Photos & Videos');
      default:
        return null;
    }
  };

  return (
    <div className={styles['broker-profile']}>
      <BrokerHeaderNav handleOpen={handleDrawer} />
      <div className={styles['broker-profile-container']}>
        <BrokerProfileView />
      </div>
      <div className={styles['broker-profile-footer']}>
        <BrokerFooter
          footerBlogList={footerBlogList}
          footerCompanyList={footerCompanyList}
        />
      </div>
      <SideDrawer
        isOpen={modal}
        onClose={handleDrawerClose}
        width='55%'
        showHeader={true}
        modalHeading={modalHeading}
        modalHeaderClass={styles['header-container']}
        footerCss={styles['footer-container']}
        showFooter={true}
        secondaryButtonLabel={'Save & Exit'}
        primaryButtonCss={styles['next-button']}
        secondaryButtonCss={styles['save-button']}
        secondaryButtonVariant='outlined-button'
        primaryButtonLabel='Next'
        handleSecondaryButtonActions={handleSaveAndExit}
        handlePrimaryButtonActions={handleNext}
        primaryButtonName='next'
        primaryButtonDisabled={disabled}
      >
        {tabComponent}
      </SideDrawer>
    </div>
  );
};

export default BrokerProfile;
