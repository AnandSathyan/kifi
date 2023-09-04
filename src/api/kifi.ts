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
  JSON_PLACEHOLDER_GET_CART,
  JSON_PLACEHOLDER_UPDATE_CART,
  JSON_PLACEHOLDER_CLEAR_CART,
  JSON_PLACEHOLDER_ADD_TO_CART,
  JSON_PLACEHOLDER_DELETE_CART,
  JSON_PLACEHOLDER_GET_WISHLIST,
  JSON_PLACEHOLDER_ADD_TO_WISHLIST,
  JSON_PLACEHOLDER_DELETE_WISHLIST,
  JSON_PLACEHOLDER_GET_USER_PROFILE,
  JSON_PLACEHOLDER_UPDATE_USER_PROFILE,
  CHANGE_PASSWORD,
  MY_ORDER,
  MY_ORDER_DETAILS,
  GET_ADDRESS,
  ADD_ADDRESS_AND_UPDATE,
  DELETE_ADDRESS,
  CREATE_ORDER
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
const client = new  ApiClient("https://kifi.zbeanztech.in/api/")
const apiUpdateCart = new ApiClient(JSON_PLACEHOLDER_UPDATE_CART) 
const apiClearCart = new ApiClient(JSON_PLACEHOLDER_CLEAR_CART)
const apiDleteCart = new ApiClient(JSON_PLACEHOLDER_DELETE_CART)
const apiAddToCart = new ApiClient(JSON_PLACEHOLDER_ADD_TO_CART)
const apiGetWishList = new ApiClient(JSON_PLACEHOLDER_GET_WISHLIST)
const apiAddToWishList = new ApiClient(JSON_PLACEHOLDER_ADD_TO_WISHLIST)
const apiDeleteWishList = new ApiClient(JSON_PLACEHOLDER_DELETE_WISHLIST)
const apiGetUserProfile = new ApiClient(JSON_PLACEHOLDER_GET_USER_PROFILE)
const apiUpdateUserProfile = new ApiClient(JSON_PLACEHOLDER_UPDATE_USER_PROFILE)
const apiChangePassword = new ApiClient(CHANGE_PASSWORD)
const apiMyOrder = new ApiClient(MY_ORDER)
const apiMyOrderDetails = new ApiClient(MY_ORDER_DETAILS)
const apiGetAddress = new ApiClient(GET_ADDRESS)
const apiAddAddress_Update = new ApiClient(ADD_ADDRESS_AND_UPDATE)
const apiDeleteAddress = new ApiClient(DELETE_ADDRESS)
const apiCreateOrder = new ApiClient(CREATE_ORDER)


export const getCartItem = async (header:any,body:any) =>{
  const response = await client.get("get-cart") 
}
export const AuthenticationClient = async (body: any) => {
  return api
    .post("","", body)
    .then((response) => response)
    .then((data) => {
      data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiClientData = async (header: any, body: any) => {
  return apiData
    .post(header, body,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};


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
    .post(header, body,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiRegister = async (header: any, body: any) => {
  return apiRegister
    .post(header, body,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiLogin = async (body: any) => {
  return apiLogin
    .post('', body,'')
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiGetCart = async (header: any,auth:any) => {
  return apiGetCart
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiUpdateCart = async (header: any,body:any,auth:any,) => {
  return apiUpdateCart
    .put(header,body,auth)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiClearCart = async (header: any,body:any,auth:any,) => {
  return apiClearCart
    .delete(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiDeleteCart = async (header: any,body:any,auth:any,) => {
  return apiDleteCart
    .delete(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiAddToCart = async (header: any,body:any,auth:any,) => {
  return apiAddToCart
    .post(header,auth,body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiGetWishList = async (header: any,auth:any) => {
  return apiGetWishList
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiAddToWishList = async (header: any,body:any) => {
  return apiAddToWishList
    .post(header,body,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiDeleteWishList = async (header: any,body:any,auth:any,) => {
  return apiDeleteWishList
    .delete(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiGetUserProfile = async (header: any,auth:any) => {
  return apiGetUserProfile
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiUpdateUserProfile = async (header: any,auth:any) => {
  return apiUpdateUserProfile
    .post(header,auth,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiChangePassword = async (header: any,auth:any) => {
  return apiChangePassword
    .post(header,auth,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiMyOrder = async (header: any,auth:any) => {
  return apiMyOrder
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiMyOrderDetails = async (header: any,auth:any) => {
  return apiMyOrderDetails
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiGetAddress = async (header: any,auth:any) => {
  return apiGetAddress
    .get(header)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiAddAndUpdateAddress = async (header: any,auth:any) => {
  return apiAddAddress_Update
    .post(header,auth,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};


export const ApiDeleteAddress = async (header: any,auth:any) => {
  return apiDeleteAddress
    .post(header,auth,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const ApiCreateOrder = async (header: any,auth:any) => {
  return apiCreateOrder
    .post(header,auth,"")
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};


