import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  ApiProductSubCategory } from "../../../../api/kifi";

export const fetchKifiProductSubCategory = createAsyncThunk(
  "SubCategory/statusById",
  async () => {
    {
      const response= await ApiProductSubCategory("");
      return response;
    }
  }
);

  interface KifiSubCategoryState {
    data: any | void;
    ApiStatus: "inital" | "loading" | "success" | "error";
  }
  
  // Define the initial state using that type
  const initialState: KifiSubCategoryState = {
    data: [],
    ApiStatus: "inital",
  };


  export const KifiSubCategorySlice = createSlice({
    name: "SubCategory",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      // Add reducers for additional action types here, and handle loading state as needed
  
      builder.addCase(fetchKifiProductSubCategory.pending, (state) => {
        state.ApiStatus = "loading";
      }),
        builder.addCase(fetchKifiProductSubCategory.fulfilled, (state:any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }),
        builder.addCase(fetchKifiProductSubCategory.rejected, (state) => {
          state.ApiStatus = "error";
        });

    },
});

export default KifiSubCategorySlice.reducer;