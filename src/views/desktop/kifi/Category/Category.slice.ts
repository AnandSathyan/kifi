import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiProductCategory } from "../../../../api/kifi";

export const fetchKifiProductCategory = createAsyncThunk(
  "Category/statusById",
  async () => {
    {
      const response= await ApiProductCategory("");
      return response;
    }
  }
);

  interface KifiCategoryState {
    data: any | void;
    ApiStatus: "inital" | "loading" | "success" | "error";
  }
  
  // Define the initial state using that type
  const initialState: KifiCategoryState = {
    data: [],
    ApiStatus: "inital",
  };


  export const KifiCategorySlice = createSlice({
    name: "Category",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      // Add reducers for additional action types here, and handle loading state as needed
  
      builder.addCase(fetchKifiProductCategory.pending, (state) => {
        state.ApiStatus = "loading";
      }),
        builder.addCase(fetchKifiProductCategory.fulfilled, (state:any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }),
        builder.addCase(fetchKifiProductCategory.rejected, (state) => {
          state.ApiStatus = "error";
        });

    },
});

export default KifiCategorySlice.reducer;