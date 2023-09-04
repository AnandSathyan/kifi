import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiChangePassword } from "../../../../api/kifi";

export const fetchKifiChangePassword = createAsyncThunk("Change/Password", async (param) => {
  
  {
    const response = await ApiChangePassword(" ",param);
    return response;
  }
});

interface KifiChangePassword {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiChangePassword = {
  data: [],
  ApiStatus: "inital",
};

export const KifiChangePasswordSlice = createSlice({
  name: "UpdateUserProfile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiChangePassword.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiChangePassword.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiChangePassword.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiChangePasswordSlice.reducer;
