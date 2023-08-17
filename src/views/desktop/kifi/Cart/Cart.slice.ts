import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiGetCart } from "../../../../api/kifi";
// const params = {
//   name: "test",
//   mobile: "9999999998",
//   email: "test@gmail.com",
//   password: "test123",
//   confirm_password: "test123",
// };
export const fetchKifiCart = createAsyncThunk("get/Cart", async (params) => {
  {
    const response = await ApiGetCart( params);
    return response;
  }
});

interface KifiCartState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiCartState = {
  data: [],
  ApiStatus: "inital",
};

export const KificartSlice = createSlice({
  name: "Cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiCart.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiCart.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiCart.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KificartSlice.reducer;
