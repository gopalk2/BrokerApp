import { USER_SERVICE_BASE_URL } from './constants';

// login
export const LOGIN = USER_SERVICE_BASE_URL + '/login/authenticate';

// password constants
export const FORGET_PASSWORD = `${USER_SERVICE_BASE_URL}/login/password/forgot`;
export const RESET_PASSWORD_CODE_VERIFY = `${USER_SERVICE_BASE_URL}/login/password/code/verify`;
export const RESET_PASSWORD = `${USER_SERVICE_BASE_URL}/login/password/reset`;
export const CHANGE_PASSWORD = `${USER_SERVICE_BASE_URL}/profile/password`;
