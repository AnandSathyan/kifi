import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiAddToWishList } from "../../../../api/kifi";

export const fetchKifiAddToWishList = createAsyncThunk("AddTo/WishList", async (param:any) => {
    console.log("param from redux",param?.data);
    
  {
    const response = await ApiAddToWishList("",param?.data);
    return response;
  }
});

interface KifiAddToWishListState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiAddToWishListState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiAddToWishListSlice = createSlice({
  name: "AddToWishList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiAddToWishList.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiAddToWishList.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiAddToWishList.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiAddToWishListSlice.reducer;
