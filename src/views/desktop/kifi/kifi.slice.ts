import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiClientData } from "../../../api/kifi";
import { data } from "../../../models/Kifi";

export const fetchKifiAsync = createAsyncThunk(
  "kifi/fetchByIdStatus",
  async () => {
    const response = await ApiClientData(
      "?session_id=f49c54979aaed9b9159449fcca5f2e9e870d03d5",
      {
        jsonrpc: "2.0",
        params: {
          model: "product.category",
          method: "get_sub_category",
          args: [{ categ_id: "5", location_id: "8" }],
        },
      }
    );
    return response;
  }
);

// Define a type for the slice state
interface UserState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: UserState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiSlice = createSlice({
  name: "Kifi",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiAsync.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(fetchKifiAsync.fulfilled, (state: any, { payload }) => {
        state.data = payload;
        state.ApiStatus = "success";
      }),
      builder.addCase(fetchKifiAsync.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiSlice.reducer;
