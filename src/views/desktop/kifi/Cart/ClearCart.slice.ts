import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiClearCart } from "../../../../api/kifi";

export const fetchKifiCartClear = createAsyncThunk("Clear/Cart", async (param:any) => {
  // console.log("redux cart update",param?.token);
  // console.log("redux cart update id",id);

  
  {
    const response = await ApiClearCart(
    "",
    param?.token
   , param?.data
   );
    return response;
  }
});

interface KifiCartClearState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiCartClearState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiCartClearSlice = createSlice({
  name: "CartClear",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiCartClear.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiCartClear.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiCartClear.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiCartClearSlice.reducer;
