export const APP_ENV = process.env.REACT_APP_APP_ENV;
export const API_BASE_URL_AUTH_SERVICE =
  process.env.REACT_APP_API_BASE_URL_AUTH_SERVICE;
export const USER_SERVICE_BASE_URL =
  process.env.REACT_APP_API_BASE_URL_USER_SERVICE;
export const SPACE_SERVICE_BASE_URL =
  process.env.REACT_APP_API_BASE_URL_SPACE_SERVICE;
export const API_BASE_URL_PROPOSAL_SERVICE =
  process.env.REACT_APP_API_BASE_URL_PROPOSAL_SERVICE;
export const WEBSITE_BASE_URL = process.env.REACT_APP_WEBSITE_URL;
export const WEBSITE_NAME = process.env.REACT_APP_WEBSITE_NAME;
export const WEBSITE_TAGLINE = process.env.REACT_APP_WEBSITE_TAGLINE;
export const WEBSITE_IMAGE_URL = process.env.REACT_APP_WEBSITE_IMAGE_URL;
export const NEXT_TELEMETRY_DISABLED =
  process.env.REACT_APP_NEXT_TELEMETRY_DISABLED;
export const APP_Type = process.env.REACT_APP_APP_NAME;
export const PER_PAGE = 5;
export const LM_TOKEN = process.env.REACT_APP_LM_TOKEN;

export const httpOptions = (contentType = 'application/json') => {
  const token = window.sessionStorage.getItem(LM_TOKEN);
  // console.log(token, 'debug e');
  return {
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`,
      app_name: APP_Type
    }
  };
};
