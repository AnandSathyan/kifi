import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiMyOrderDetails } from "../../../../api/kifi";

export const fetchKifiGetMyOrderDetails = createAsyncThunk("get/MyOrderDetails", async (params) => {
  {
    const response = await ApiMyOrderDetails(params,"");
    return response;
  }
});

interface KifiGetMyOrderDetailsState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiGetMyOrderDetailsState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiMyOrderDetailsSlice = createSlice({
  name: "MyOrderDetails",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiGetMyOrderDetails.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiGetMyOrderDetails.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiGetMyOrderDetails.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiMyOrderDetailsSlice.reducer;
