import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { fetchUsers } from "../../api/users";

// Define a type for the slice state
interface UserState {
  users: User[] | void;
  usersStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  usersStatus: "inital",
};

export const fetchUserAsync = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

export const usersSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchUserAsync.pending, (state) => {
      state.usersStatus = "loading";
    }),
      builder.addCase(fetchUserAsync.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.usersStatus = "success";
      }),
      builder.addCase(fetchUserAsync.rejected, (state) => {
        state.usersStatus = "error";
      });
  },
});

export default usersSlice.reducer;
