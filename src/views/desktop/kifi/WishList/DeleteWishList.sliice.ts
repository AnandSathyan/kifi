import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiDeleteWishList } from "../../../../api/kifi";

export const fetchKifiDeleteWishList = createAsyncThunk("Delete/WishList", async (param:any) => {
    console.log("param?.idparam?.id",param?.data?.id);
    
  {
    const response = await ApiDeleteWishList(param?.data?.id,"","");
    return response;
  }
});

interface KifiDeleteWishListState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiDeleteWishListState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiDeleteWishListSlice = createSlice({
  name: "DeleteWishList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiDeleteWishList.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiDeleteWishList.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiDeleteWishList.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiDeleteWishListSlice.reducer;
