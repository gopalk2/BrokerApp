import { createSlice } from '@reduxjs/toolkit';

const loginSignupSlice = createSlice({
  name: 'loginSignup',
  initialState: {
    login: {
      loginData: null,
      userInfo: []
    },
    signup: {
      signupData: null
    },
    profileData: {
      email: '',
      contactNo: '',
      organization: '',
      designation: '',
      //extra para
      id: 10,
      image: null,
      role: "",
      cityId: null,
      status: "",
      createdAt: "",
      updatedAt: ""
    },
    loggedIn: null,
    verifyNumber: null,
    updatePassword: null
  },
  reducers: {
    uploadLogin(state, action) {
      return {
        ...state,
        login: {
          ...state.login,
          loginData: action.payload
        }
      };
    },
    LoginInfo(state, action) {
      return {
        ...state,
        login: {
          ...state.login,
          userInfo: action.payload
        }
      };
    },
    uploadSignup(state, action) {
      return {
        ...state,
        signup: {
          ...state.signup,
          signupData: action.payload
        }
      };
    },
    idLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    passwordUpdated(state, action) {
      state.updatePassword = action.payload;
    },
    verifyNumber(state, action) {
      state.verifyNumber = action.payload;
    },
    //profile Data
    updateProfile(state, action) {
      state.profileData = action.payload;
    },
    updateEmail(state, action) {
      state.profileData.email = action.payload;
    },
    updateContact(state, action) {
      state.profileData.contactNo = action.payload;
    },
    updateOrganization(state, action) {
      state.profileData.organization = action.payload;
    },
    updateDesignation(state, action) {
      state.profileData.designation = action.payload;
    },
    updateImageUrl(state, action) {
      state.profileData.image = action.payload;
    },
  }
});

export const loginSignupAction = loginSignupSlice.actions;

export default loginSignupSlice;
