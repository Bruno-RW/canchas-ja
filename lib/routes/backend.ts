
//! === === === BASE BACKEND URI === === === ?//
export const BACKEND_URI  = "http://localhost:8000";


//~ === === === AUTH ENDPOINTS === === === ~//
export const LOGIN_API_URL  = `${BACKEND_URI}/api/v1/login`;
export const SIGNIN_API_URL = `${BACKEND_URI}/api/v1/signin`;


//? === === === USER ENDPOINTS === === === ?//
export const USER_API_URL = `${BACKEND_URI}/api/v1/user`;
export const USER_FAVORITES_API_URL = `${USER_API_URL}/favorites`;


//? === === === PRODUCT ENDPOINTS === === === ?//
export const PRODUCT_API_URL = `${BACKEND_URI}/api/v1/product`;
export const PRODUCT_SPECIAL_DISCOUNT_API_URL = `${PRODUCT_API_URL}/special_discounts`;
export const PRODUCT_BEST_RATED_API_URL = `${PRODUCT_API_URL}/best_rated`;
export const PRODUCT_NEAR_YOU_API_URL = `${PRODUCT_API_URL}/near_you`;