import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiLogin } from "../../../../api/kifi";
// const params = {
//   name: "test",
//   mobile: "9999999998",
//   email: "test@gmail.com",
//   password: "test123",
//   confirm_password: "test123",
// };
export const fetchKifiLogin = createAsyncThunk("Login/All", async (params) => {
  {
    const response = await ApiLogin("", params);
    return response;
  }
});

interface KifiLoginState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiLoginState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiLoginrSlice = createSlice({
  name: "Register",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiLogin.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiLogin.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiLogin.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiLoginrSlice.reducer;
