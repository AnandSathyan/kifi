import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiUpdateUserProfile } from "../../../../api/kifi";

export const fetchKifiUpdateUserProfile = createAsyncThunk("Update/UserProfile", async (param) => {
  
  {
    const response = await ApiUpdateUserProfile(" ",param);
    return response;
  }
});

interface KifiUpdateUserProfileState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiUpdateUserProfileState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiUpdateUserProfileSlice = createSlice({
  name: "UpdateUserProfile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiUpdateUserProfile.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiUpdateUserProfile.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiUpdateUserProfile.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});
export default KifiUpdateUserProfileSlice.reducer;
