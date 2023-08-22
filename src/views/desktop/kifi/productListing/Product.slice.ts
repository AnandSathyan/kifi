import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiProductListing, ApiProductSearch } from "../../../../api/kifi";
import { ProductInterface } from "../../../../models/product";

export const fetchKifiProductListing = createAsyncThunk(
  "Product/All",
  async () => {
    {
      const response = await ApiProductListing("");
      return response;
    }
  }
);
export const fetchKifiProductSearch = createAsyncThunk(
  "kifi/Product/search",
  async (params) => {
    {
      // console.log("params redux",params);

      const response = await ApiProductSearch("", params);
      return response;
    }
  }
);
interface KifiProductState {
  data: ProductInterface | undefined;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiProductState = {
  data: undefined,
  ApiStatus: "inital",
};

export const KifiProductSlice = createSlice({
  name: "Product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiProductListing.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiProductListing.fulfilled,
        (state, action ) => {
          state.data = action.payload as ProductInterface;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiProductListing.rejected, (state) => {
        state.ApiStatus = "error";
      });
    builder.addCase(fetchKifiProductSearch.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiProductSearch.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiProductSearch.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiProductSlice.reducer;
