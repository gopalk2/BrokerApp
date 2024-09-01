import { Login_Info, Broker_Review } from "../actionTypes"

const initialState = {
    // All use
    loggedUserData: [],
    brokerReview: [],
}

const AllReducer = (state = initialState, action) => {
    switch (action.type) {
        case Login_Info:
            return {
                ...state,
                loggedUserData: action.payload
            }
        case Broker_Review:
            return {
                ...state,
                brokerReview: action.payload
            }
        default: return state
    }
}

export default AllReducer
