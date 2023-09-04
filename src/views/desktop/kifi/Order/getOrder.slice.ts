import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiMyOrder } from "../../../../api/kifi";

export const fetchKifiGetMyOrder = createAsyncThunk("get/MyOrder", async (params) => {
  {
    const response = await ApiMyOrder(params,"");
    return response;
  }
});

interface KifiGetMyOrderState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiGetMyOrderState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiMyOrderSlice = createSlice({
  name: "MyOrder",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiGetMyOrder.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiGetMyOrder.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiGetMyOrder.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiMyOrderSlice.reducer;
