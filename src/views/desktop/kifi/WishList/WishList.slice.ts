import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiGetWishList } from "../../../../api/kifi";

export const fetchKifiWishList = createAsyncThunk("get/WishList", async (param) => {
  {
    const response = await ApiGetWishList(" ",param);
    return response;
  }
});

interface KifiGetWishListState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiGetWishListState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiGetWishListSlice = createSlice({
  name: "WishList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiWishList.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiWishList.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiWishList.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiGetWishListSlice.reducer;
