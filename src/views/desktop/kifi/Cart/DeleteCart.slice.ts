import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiDeleteCart } from "../../../../api/kifi";

export const fetchKifiCartDelete = createAsyncThunk("Delete/Cart", async (param:any) => {
  // console.log("redux cart update",param);
  // console.log("redux cart update id",id);

  
  {
    const response = await ApiDeleteCart(
    param?.id, 
    param?.token
   , param?.data);
    return response;
  }
});

interface KifiCartDeleteState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiCartDeleteState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiCartDeleteSlice = createSlice({
  name: "CartDelete",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiCartDelete.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiCartDelete.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiCartDelete.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiCartDeleteSlice.reducer;
