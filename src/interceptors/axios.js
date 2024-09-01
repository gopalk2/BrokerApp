// Axios Interceptop -> Send access_token all component
import axios from "axios";

// console.log(axios)


axios.defaults.baseURL = 'https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/';
// https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/
// https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/brokers


const AxiosCom = () => {

    axios.interceptors.request.use(async (request) => {
        const access_token = sessionStorage.getItem('Token') ? sessionStorage.getItem('Token') : '';
        request.headers['Authorization'] = `Bearer ${access_token}`
        return request;
    }, function (error) {
        console.log(error);
        return Promise.reject(error);
    });

    return <div></div>;
};

export default AxiosCom;

