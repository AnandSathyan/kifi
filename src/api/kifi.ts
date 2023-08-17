import {
  JSON_PLACEHOLDER_AUTH,
  JSON_PLACEHOLDER,
  JSON_PLACEHOLDER_LOCATION,
  JSON_PLACEHOLDER_PRODUCT_CATEGORY,
  JSON_PLACEHOLDER_SEARCH_PRODUCT,
  JSON_PLACEHOLDER_PRODUCT_ALL,
  JSON_PLACEHOLDER_PRODUCT_SUB_CATEGORY,
  JSON_PLACEHOLDER_REGISTER,
  JSON_PLACEHOLDER_LOGIN,
  JSON_PLACEHOLDER_GET_CART
} from "../contants";
import ApiClient from "./client";
const api = new ApiClient(JSON_PLACEHOLDER_AUTH);
const apiData = new ApiClient(JSON_PLACEHOLDER);
const apiLocation = new ApiClient(JSON_PLACEHOLDER_LOCATION);
const apiProductCategory = new ApiClient(JSON_PLACEHOLDER_PRODUCT_CATEGORY);
const apiProductSearch = new ApiClient(JSON_PLACEHOLDER_SEARCH_PRODUCT);
const apiProductListing = new ApiClient(JSON_PLACEHOLDER_PRODUCT_ALL)
const apiProductSubCategory = new ApiClient(JSON_PLACEHOLDER_PRODUCT_SUB_CATEGORY)
const apiRegister = new ApiClient(JSON_PLACEHOLDER_REGISTER)
const apiLogin = new ApiClient(JSON_PLACEHOLDER_LOGIN)
const apiGetCart = new ApiClient(JSON_PLACEHOLDER_GET_CART)
// export const AuthenticationClient = async (body: any) => {
//   return api
//     .post("", body)
//     .then((response) => response)
//     .then((data) => {
//       data;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };
// export const ApiClientData = async (header: any, body: any) => {
//   return apiData
//     .post(header, body)
//     .then((response) => response)
//     .then((data) => data)
//     .catch((err) => {
//       console.log(err.message);
//     });
// };


export const ApiLocation = async (body: any) => {
  return apiLocation
    .get(body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiProductCategory = async (body: any) => {
  return apiProductCategory
    .get(body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiProductSubCategory = async (body: any) => {
  return apiProductSubCategory
    .get(body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiProductListing = async (body:any) => {
  return apiProductListing
    .get(body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiProductSearch = async (header: any, body: any) => {
  return apiProductSearch
    .post(header, body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiRegister = async (header: any, body: any) => {
  return apiRegister
    .post(header, body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiLogin = async (header: any, body: any) => {
  return apiLogin
    .post(header, body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiGetCart = async (header: any) => {
  return apiGetCart
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};