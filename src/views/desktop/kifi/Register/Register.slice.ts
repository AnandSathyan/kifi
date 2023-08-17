import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiRegister } from "../../../../api/kifi";
// const params = {
//   name: "test",
//   mobile: "9999999998",
//   email: "test@gmail.com",
//   password: "test123",
//   confirm_password: "test123",
// };
export const fetchKifiRegister = createAsyncThunk("Register/All", async (params) => {
  {
    const response = await ApiRegister("", params);
    return response;
  }
});

interface KifiRegisterState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiRegisterState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiRegisterSlice = createSlice({
  name: "Register",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiRegister.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiRegister.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiRegister.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiRegisterSlice.reducer;
