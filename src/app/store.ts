import { configureStore } from "@reduxjs/toolkit";
import  KifiCategorySlice  from "../views/desktop/kifi/Category/Category.slice";
import  KifiSubCategorySlice  from "../views/desktop/kifi/Category/SubCategory.slice";
import kifiSlice from "../views/desktop/kifi/kifi.slice";
import  KifiLoginrSlice  from "../views/desktop/kifi/Login/Login.slice";
import KifiProductSlice  from "../views/desktop/kifi/productListing/Product.slice";
import  KifiProductSearchSlice  from "../views/desktop/kifi/ProductSearch/ProductSearch.slice";
import  KifiRegisterSlice from "../views/desktop/kifi/Register/Register.slice";
import KificartSlice  from "../views/desktop/kifi/Cart/Cart.slice";
import usersSlice from "../views/users/users.slice";
import  KifiCartUpdateSlice from "../views/desktop/kifi/Cart/UpdateCart.slice";
import  KifiGetWishListSlice  from "../views/desktop/kifi/WishList/WishList.slice";
import  KifiAddToWishListSlice  from "../views/desktop/kifi/WishList/AddToWishList.slice";
import KifiCartAddSlice  from "../views/desktop/kifi/Cart/AddToCart.slice";
import  KifiGetUserProfileSlice  from "../views/desktop/kifi/User/GetUserProfile.slice";
import  KifiUpdateUserProfileSlice  from "../views/desktop/kifi/User/UpdateUserProfile.slice";
import  KifiChangePasswordSlice  from "../views/desktop/kifi/User/ChangePassword.slice";
import  KifiMyOrderSlice  from "../views/desktop/kifi/Order/getOrder.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    kifi: kifiSlice,
    Product:KifiProductSlice,
    Category:KifiCategorySlice,
    SubCategory:KifiSubCategorySlice,
    Register:KifiRegisterSlice,
    Login:KifiLoginrSlice,
    ProductSearch:KifiProductSearchSlice,
    GetCart:KificartSlice,
    AddToCart:KifiCartAddSlice,
    UpdateCart:KifiCartUpdateSlice,
    GetWishList:KifiGetWishListSlice,
    AddToWishList:KifiAddToWishListSlice,
    GetUserProfile:KifiGetUserProfileSlice,
    UpdateUserProfile:KifiUpdateUserProfileSlice,
    ChangePassword:KifiChangePasswordSlice,
    MyOrder:KifiMyOrderSlice,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
