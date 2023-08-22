import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiUpdateCart } from "../../../../api/kifi";

export const fetchKifiCartUpdate = createAsyncThunk("Update/Cart", async (param:any) => {
  // console.log("redux cart update",param?.token);
  // console.log("redux cart update id",id);

  
  {
    const response = await ApiUpdateCart(
    param?.id, 
    param?.token
   , param?.data);
    return response;
  }
});

interface KifiCartUpdateState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiCartUpdateState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiCartUpdateSlice = createSlice({
  name: "CartUpdate",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiCartUpdate.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiCartUpdate.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiCartUpdate.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiCartUpdateSlice.reducer;
