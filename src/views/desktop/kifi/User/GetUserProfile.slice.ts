import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiGetUserProfile } from "../../../../api/kifi";

export const fetchKifiGetUserProfile = createAsyncThunk("get/UserProfile", async (param) => {
  {
    const response = await ApiGetUserProfile(" ",param);
    return response;
  }
});

interface KifiGeUserProfileState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiGeUserProfileState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiGetUserProfileSlice = createSlice({
  name: "UserProfile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiGetUserProfile.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiGetUserProfile.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiGetUserProfile.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiGetUserProfileSlice.reducer;
