import { fetchData } from "../../apiMethods/api";
import { Broker_Review, Login_Info } from "../actionTypes";
import { loginSignupAction } from "../login-signup-slice";


export const get_UserLogged_Data = () => async (dispatch) => {
    try {
        const res = await fetchData('user/profile');
        if (res) {
            // console.log(res)
            dispatch(loginSignupAction.uploadLogin({ mobileNumber: parseInt(res?.contactNo), termCondition: true }));
            dispatch(loginSignupAction.idLoggedIn(true));
            dispatch(loginSignupAction.updateProfile(res));
            dispatch({ type: Login_Info, payload: res });
        }
    } catch (error) {
        dispatch({ type: Login_Info, payload: [] });
    }
};

export const get_BrokerReview_Data = (brokerId) => async (dispatch) => {
    try {
        const res = await fetchData(`brokers/${brokerId}/reviews`);
        if (res) {
            dispatch({ type: Broker_Review, payload: res });
        } else {
            dispatch({ type: Broker_Review, payload: [] });
        }
    } catch (error) {
        dispatch({ type: Broker_Review, payload: [] });
    }
};