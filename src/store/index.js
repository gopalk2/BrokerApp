import { configureStore } from '@reduxjs/toolkit';
import apiResDataSlice from './apiRes-Data-slice';
import brokerProfileSlice from './broker-profile-slice';
import brokerSlice from './broker-slice';
import loginSignupSlice from './login-signup-slice';
import AllReducer from './reducer/allReducer';

const store = configureStore({
  reducer: {
    brokerHome: brokerSlice.reducer,
    brokerProfile: brokerProfileSlice.reducer,
    loginSignup: loginSignupSlice.reducer,
    apiResData: apiResDataSlice.reducer,
    AllReducer: AllReducer
  }
});

export default store;
