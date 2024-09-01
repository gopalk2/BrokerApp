import { createSlice } from '@reduxjs/toolkit';
import {
  // brokerDetails,
  // featuredBrokerDetails
} from '../views/Home/config/homeData';

const brokerSlice = createSlice({
  name: 'broker',
  initialState: {
    // featuredBroker: featuredBrokerDetails,
    // discoveryBroker: brokerDetails,
    featuredBroker: [],
    discoveryBroker: [],
    filters: {
      city: null,
      locality: [],
      brokerType: null,
      amenities: []
    },
    connectWithUs: [
      {
        email: null,
        name: null,
        contactNumber: null,
        organization: null,
        designation: null
      }
    ]
  },
  reducers: {
    setFeaturedBroker(state, action) {
      state.featuredBroker = action.payload;
    },
    setDiscoveryBroker(state, action) {
      state.discoveryBroker = action.payload;
    },
    updateCityFilter(state, action) {
      state.filters.city = action.payload;
    },
    updateLocalityFilter(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          locality: action.payload
        }
      };
    },
    updateBrokerFilter(state, action) {
      state.filters.brokerType = action.payload;
    },
    updateConnectWithUs(state, action) {
      state.requestProposal = action.payload;
    },
    updateAmenitiesFilter(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          amenities: [...state.filters.amenities, action.payload]
        }
      };
    }
  }
});

export const brokerAction = brokerSlice.actions;
export default brokerSlice;
