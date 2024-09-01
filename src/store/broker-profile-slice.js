import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { brokerImageGallery, commercialData } from '../views/BrokerProfile/config/brokerProfileData';

const emptyProperty = {
  name: '',
  location: '',
  designation: '',
  leasableArea: null,
  image: '',
  locationId : '',
  propertyType : '',
  cityId : '',
};
const emptyTeamMember = {
  name: '',
  email: '',
  startingPrice: '',
  contactNo: '',
  image: ''
};

const brokerProfileSlice = createSlice({
  name: 'brokerProfile',
  initialState: {
    commercialData: commercialData,
    gallery: [],
    gallery: brokerImageGallery,
    connectWithUs: [],
    review: [],
    isOpen: [],
    companyDetails: {
      name: '',
      email: '',
      contactNo: '',
      website: '',
      headquaterAddress: '',
      linkedin: '',
      aboutCompany: '',
      companyLogo: ''
    },
    cities: [],
    professionalDetails: {
      registrationNo: '',
      pan: '',
      gst: '',
      specializations: [],
      yearsExperience: '',
      activeListings: '',
      totalClientsServed: '',
      totalDealsClosed: '',
      clients: []
    },
    media: {

      videos: []
    },
    reraTypes: {
      reraId: null,
      reraRegistrationNo: '',
      panNo: '',
      gstNo: '',
      specializations: [],
      yearsOfExperience: '',
      activeListing: '',
      totalClientsServed: '',
      totalDealsClosed: '',
      pastClients: [],
      name: '',
      email: '',
      contactNo: '',
      website: '',
      headquaterAddress: '',
      linkedInProfileUrl: '',
      aboutCompany: '',
      companyLogo: '',
      properties: [],
      images: [],
      videos: [],
      team: [],
      locations: [],
    },
    citiesOperation: [],
    locationsByCity: {} ,
  },
  reducers: {
    updateConnectWithUs(state, action) {
      state.connectWithUs.push(action.payload);
    },
    updatePostReview(state, action) {
      state.review.push(action.payload);
    },
    toggleSpaceForm(state, action) {
      const updatedIsOpen = [...state.isOpen];
      updatedIsOpen[action.payload] = !updatedIsOpen[action.payload];
      state.isOpen = updatedIsOpen;
    },
    addProperty(state) {
      if (!state.reraTypes.properties) {
        state.reraTypes.properties = [];
      }
      const property = { ...emptyProperty, id: nanoid(1) };
      state.reraTypes.properties.push(property);
    },
    updatePropertyName(state, action) {
      const { id, name } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.name = name;
      }
    },
    updatePropertyLocation(state, action) {
      const { id, location } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.location = location;
      }
    },
    updatePropertyLocationId(state, action) {
      const { id, locationId } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.locationId = locationId; 
      }
    },
    updatePropertyDesignation(state, action) {
      const { id, designation } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.designation = designation;
      }
    },
    updatePropertyLeasableArea(state, action) {
      const { id, leasableArea } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.leasableArea = leasableArea;
      }
    },
    updatePropertyLogo(state, action) {
      const { id, image } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.image = image;
      }
    },
    updatePropertySpaceType(state, action) {
      const { id, propertyType } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.propertyType = propertyType; 
      }
    },
    
    deleteProperty(state, action) {
      if (Array.isArray(state.reraTypes.properties)) {
        state.reraTypes.properties = state.reraTypes.properties.filter(property => property.id !== action.payload);
      }
    },
    addTeamMember(state) {
      if (!state.reraTypes.team) {
        state.reraTypes.team = [];
      }
      const member = { ...emptyTeamMember, id: nanoid(1) };
      state.reraTypes.team.push(member);
    },
    updateTeamMemberEmail(state, action) {
      const { id, email } = action.payload || {};
      const member = state.reraTypes.team.find(item => item.id === id);
      if (member) {
        member.email = email;
      }
    },
    updateTeamMemberName(state, action) {
      const { id, name } = action.payload || {};
      const member = state.reraTypes.team.find(item => item.id === id);
      if (member) {
        member.name = name;
      }
    },
    updateStartingPrice(state, action) {
      const { id, startingPrice } = action.payload || {};
      const member = state.reraTypes.team.find(item => item.id === id);
      if (member) {
        member.startingPrice = startingPrice;
      }
    },
    updateTeamMemberContactNumber(state, action) {
      const { id, contactNo } = action.payload || {};
      const member = state.reraTypes.team.find(item => item.id === id);
      if (member) {
        member.contactNo = contactNo;
      }
    },
    updateTeamMemberLogo(state, action) {
      const { id, image } = action.payload || {};
      const member = state.reraTypes.team.find(item => item.id === id);
      if (member) {
        member.image = image;
      }
    },
    deleteTeamMember(state, action) {
      if (Array.isArray(state.reraTypes.team)) {
        state.reraTypes.team = state.reraTypes.team.filter(member => member.id !== action.payload);
      }
    },
    updateCompanyName(state, action) {
      const { name = '' } = action.payload || {};
      state.reraTypes.name = name;
    },
    updateOfficialEmailId(state, action) {
      const { email = '' } = action.payload || {};
      state.reraTypes.email = email;
    },
    updateOfficialContactNumber(state, action) {
      const { contactNo = '' } = action.payload || {};
      state.reraTypes.contactNo = contactNo;
    },
    updateOfficialWebsite(state, action) {
      const { website = '' } = action.payload || {};
      state.reraTypes.website = website;
    },
    updateCompanyHeadquarter(state, action) {
      const { headquaterAddress = '' } = action.payload || {};
      state.reraTypes.headquaterAddress = headquaterAddress;
    },
    updateLinkedin(state, action) {
      const { linkedInProfileUrl = '' } = action.payload || {};
      state.reraTypes.linkedInProfileUrl = linkedInProfileUrl;
    },
    updateAboutCompany(state, action) {
      const { aboutCompany = '' } = action.payload || {};
      state.reraTypes.aboutCompany = aboutCompany;
    },
    updateCityData(state, action) {
      state.cities = action.payload;
    },
    setRegistrationNo(state, action) {
      const { registrationNo = '' } = action.payload || {};
      state.reraTypes.reraRegistrationNo = registrationNo;
    },
    setPan(state, action) {
      const { panNo = '' } = action.payload || {};
      state.reraTypes.panNo = panNo;
    },
    setGst(state, action) {
      const { gstNo = '' } = action.payload || {};
      state.reraTypes.gstNo = gstNo;
    },
    setSpecializations(state, action) {
      const { specializations = [] } = action.payload || {};
      state.reraTypes.specializations = Array.isArray(specializations) ? specializations : [];
    },
    setYearsExperience(state, action) {
      const { yearsOfExperience = '' } = action.payload || {};
      state.reraTypes.yearsOfExperience = yearsOfExperience;
    },
    setActiveListings(state, action) {
      const { activeListing = '' } = action.payload || {};
      state.reraTypes.activeListing = activeListing;
    },
    setTotalClientsServed(state, action) {
      const { totalClientsServed = '' } = action.payload || {};
      state.reraTypes.totalClientsServed = totalClientsServed;
    },
    setTotalDealsClosed(state, action) {
      const { totalDealsClosed = '' } = action.payload || {};
      state.reraTypes.totalDealsClosed = totalDealsClosed;
    },
    setClients(state, action) {
      const { clients = [] } = action.payload || {};
      state.reraTypes.pastClients = clients;
    },
    addImage(state, action) {
      state.reraTypes.images.push(action.payload);
    },
    removeImage(state, action) {
      state.reraTypes.images = state.reraTypes.images.filter(image => image.id !== action.payload);
    },
    replaceImage(state, action) {
      const { index, newImage } = action.payload || {};
      state.reraTypes.images[index] = newImage;
    },
   addVideo(state, action) {
      if (!state.reraTypes.videos) {
        state.reraTypes.videos = [];
      }
      state.reraTypes.videos.push(action.payload);
    },
    removeVideo(state, action) {
      state.reraTypes.videos = state.media.videos.filter(video => video.id !== action.payload);
    },
    replaceVideo(state, action) {
      const { index, newVideo } = action.payload || {};
      state.reraTypes.videos[index] = newVideo;
    },
    updateCompanyLogo(state, action) {
      state.reraTypes.companyLogo = action.payload;
    },
    setReraTypes(state, action) {
      state.reraTypes = action.payload;
    },
    setUpdateGallary(state, action) {
      state.gallery = action.payload;
    },
    setReraID(state, action) {
      const { reraId } = action.payload || {};
      state.reraTypes.reraId = reraId;
    },
    citiesOfOperation(state, action) {
      return {
        ...state,
        citiesOperation: action.payload
      };
    },
    updatePropertyCity(state, action) {
      const { id, cityId } = action.payload || {};
      const property = state.reraTypes.properties.find(item => item.id === id);
      if (property) {
        property.cityId = cityId;
      }
    },
    // updateLocationsByCity(state, action) {
    //   const { cityId, locations } = action.payload;
    //   console.log(locations ,'locationsinner');
    //   state.reraTypes.locations = {
    //     ...state.reraTypes.locations,
    //     [cityId]: locations
    //   };
    // },
    updateLocationsByCity(state, action) {
      const { locations } = action.payload;
    
      // Ensure locations is an array
      if (Array.isArray(locations)) {
        state.reraTypes.locations = locations;
      } else {
        console.error('Invalid locations format:', locations);
      }
    },
    
    

    clearLocationsByCity(state) {
      state.locationsByCity = {};
    }

  }
});

export const brokerProfileAction = brokerProfileSlice.actions;
export default brokerProfileSlice;
