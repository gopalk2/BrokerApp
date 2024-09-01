import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, Upadate } from '../../apiMethods/api';
import BrokerFooter from '../../components/BrokerFooter';
import BrokerHeaderNav from '../../components/BrokerHeaderNav';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import { brokerAction } from '../../store/broker-slice';
import CompanyDetails from '../BrokerProfile/component/AddNewBrokerProfile/CompanyDetails';
import Listings from '../BrokerProfile/component/AddNewBrokerProfile/Listing/Listings';
import PhotosAndVideos from '../BrokerProfile/component/AddNewBrokerProfile/PhotosAndVideos';
import ProfessionalDetails from '../BrokerProfile/component/AddNewBrokerProfile/ProfessionalDetails';
import TeamDetails from '../BrokerProfile/component/AddNewBrokerProfile/TeamDetails/TeamDetails';
import BrokerProfileFormHeader from '../BrokerProfile/component/BrokerProfileFormHeader';
import DiscoveryBroker from './component/DiscoveryBroker';
import FeaturedBroker from './component/FeaturedBroker';
import HeaderSecondSection from './component/HeaderSecondSection';
import { footerBlogList, footerCompanyList } from './config/homeData';
import styles from './style.module.css';
import { get_UserLogged_Data } from '../../store/action/allAction';
import { toastifySuccess } from '../../Comman/AlertMsg';


const Home = () => {

  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [brokerProfileTab, setBrokerProfileTab] = useState('Company Details');
  // const [disabled, setDisabled] = useState(false);
  const professionalDetails = useSelector((state) => state.brokerProfile.reraTypes);

  const loggedUserInfo = useSelector((state) => state.AllReducer.loggedUserData);

  useEffect(() => {
    getFeaturedBroker();
    // if (sessionStorage?.getItem('Token')) { dispatch(get_UserLogged_Data()) }
  }, []);

  const getFeaturedBroker = async () => {
    const res = await fetchData('brokers/featured');
    if (res?.length > 0) {
      dispatch(brokerAction.setFeaturedBroker(res));
    }
  }

  const scrollToComponent = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDrawer = () => {
    setModal(true);
  };

  const handleDrawerClose = () => {
    setModal(false);
  };

 
  const handleSaveAndExit = () => {
    // const cityIds = (professionalDetails.cities || []).filter(city => city !== null).map((_, index) => index);
    const videoUrl = professionalDetails?.videos?.[0]?.src || '';
    const properties = (professionalDetails?.properties || []).map(property => ({
      // image: property.image || '',
      image: 'https://avatars.githubusercontent.com/u/24287791',
      name: property?.name || '',
      locationId: property.locationId,
      // locationId: 1,
      // location: property.location || 1,
      propertyType: 'commercial',
      designation: property?.designation || '',
      leasableArea: property?.leasableArea || null
    }));

    const team = (professionalDetails?.team || []).map(member => ({
      image: member?.image || 'https://avatars.githubusercontent.com/u/24287791',
      name: member?.name || '',
      email: member?.email || '',
      contactNo: member?.contactNo || '',
      startingPrice: member.startingPrice || ''
    }));

    const images = (professionalDetails.images || []).map(img => ({
      image: img.image || ''
    }));


    // const payload = {

    //   name: 'Divyanshu Singh',
    //   email: 'DivyanshuSingh@acmerealestate.com',
    //   contactNo: professionalDetails.contactNo || '',
    //   companyLogo: 'https://avatars.githubusercontent.com/u/24287791',
    //   linkedInProfileUrl: 'Faker=>https://breakable-barbecue.info/',
    //   website: 'https://www.acmerealestate.com',
    //   headquaterAddress: '123 Main Street, Cityville, State',
    //   aboutCompany: 'Divyanshu Singh is a leading real estate company specializing in residential and commercial properties.',
    //   reraId: 1,
    //   reraRegistrationNo: 'RERA/ABC/123',
    //   panNo: 'ABCDE1234F',
    //   gstNo: '12ABCDE1234F1Z5',
    //   yearsOfExperience: 10,
    //   activeListing: 250,
    //   totalClientsServed: 5000,
    //   totalDealsClosed: 2500,
    //   pastClients: 'Diuv A, Div B, deni C',
    //   videoPath: 'https://example.com/company-video.mp4',
    //   team: [
    //     {
    //       name: 'Divyanshu Singh',
    //       email: 'Divyanshu710@hotmail.com',
    //       contactNo: '+2520252025',
    //       startingPrice: 123
    //     }
    //   ],
    //   images: [{ image: 'http://google.com' }],
    //   properties: [
    //     {
    //       image: 'http://google.com',
    //       name: 'Acme Real Estate',
    //       locationId: 1,
    //       propertyType: 'commercial',
    //       designation: 'Sr Sales Manager',
    //       leasableArea: 124
    //     }
    //   ],
    //   specializations: [1],
    //   locations: [1]
    // }

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
      // videoPath: 'https://avatars.githubusercontent.com/u/76606047',
      team: team,
      // images: [{ image: 'http://google.com' }],
      images: images,
      properties: properties,
      // specializations: professionalDetails.specializations || [],
      specializations: professionalDetails.specializations?.map(spec => spec.id) || [],
      // cities: cityIds,
      locations: professionalDetails.locations,
      linkedInProfileUrl: professionalDetails?.linkedInProfileUrl
    };

    Upadate('/brokers', payload).then((res) => {
      if (res.status) {
        // console.log(res, 'response');
       toastifySuccess('Broker Created Successfully')
      }
    }).catch(error => {
      console.error('Error updating broker profile:', error);
    });

    setModal(false);
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
    tabComponent = <CompanyDetails />;
  } else if (brokerProfileTab === 'Professional Details') {
    tabComponent = <ProfessionalDetails />;
  } else if (brokerProfileTab === 'Listings') {
    tabComponent = <Listings />;
  } else if (brokerProfileTab === 'Team Details') {
    tabComponent = <TeamDetails />;
  } else if (brokerProfileTab === 'Photos & Videos') {
    tabComponent = <PhotosAndVideos />;
  }

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
    <div className={styles['home']}>
      <div className={styles['background-img']}>
        <BrokerHeaderNav handleOpen={handleDrawer} className={styles['background-none']} />
        <div className={styles['home-section-div']}>
          <HeaderSecondSection scrollToComponent={scrollToComponent} />
        </div>
      </div>
      <div className={styles['home-broker-container']}>
        <FeaturedBroker />
      </div>
      <div className={styles['home-container']} ref={targetRef}>
        <DiscoveryBroker />
      </div>
      <div className={styles['home-footer']}>
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
      // primaryButtonDisabled={disabled}
      >
        {tabComponent}
      </SideDrawer>
    </div >
  );
};

export default Home;
