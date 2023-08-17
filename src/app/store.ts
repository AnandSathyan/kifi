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
    GetCart:KificartSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
