import { createSlice } from '@reduxjs/toolkit';


const apiResDataSlice = createSlice({
    name: 'apiResData',
    initialState: {
        cityArray: [],
        userPhone: '',
    },

    reducers: {
        updateCityData(state, action) {
            state.cityArray = action.payload;
        },
        updatePhone(state, action) {
            state.userPhone = action.payload;
        },
    }
});

export const ApiResDataAction = apiResDataSlice.actions;
export default apiResDataSlice;
