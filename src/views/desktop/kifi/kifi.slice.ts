import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  // ApiClientData,
  ApiLocation,
  ApiProductCategory,
  // ApiProductListing,
  ApiProductSearch,
} from "../../../api/kifi";
// import { data } from "../../../models/Kifi";
const params = {
  jsonrpc: "2.0",
  params: {
    model: "product.category",
    method: "get_sub_category",
    args: [{ categ_id: "5", location_id: "8" }],
  },
};
// export const fetchKifiAsync = createAsyncThunk(
//   "kifi/fetchByIdStatus",
//   async () => {
//     const response = await ApiClientData(
//       "?session_id=f49c54979aaed9b9159449fcca5f2e9e870d03d5",
//       params
//     );
//     return response;
//   }
// );



export const fetchKifiProductSearch = createAsyncThunk(
  "kifi/Product/search",
  async () => {
    {
      const response = await ApiProductSearch("", {
        search: "Bo",
        category: "ALL",
      });
      return response;
    }
  }
);


// Define a type for the slice state
interface KifiState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiState = {
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

    // builder.addCase(fetchKifiAsync.pending, (state) => {
    //   state.ApiStatus = "loading";
    // }),
    //   builder.addCase(fetchKifiAsync.fulfilled, (state: any, { payload }) => {
    //     state.data = payload;
    //     state.ApiStatus = "success";
    //   }),
    //   builder.addCase(fetchKifiAsync.rejected, (state) => {
    //     state.ApiStatus = "error";
    //   });
  
    // builder.addCase(fetchKifiProductCategory.pending, (state) => {
    //   state.ApiStatus = "loading";
    // }),
    //   builder.addCase(
    //     fetchKifiProductCategory.fulfilled,
    //     (state: any, { payload }) => {
    //       state.data = payload;
    //       state.ApiStatus = "success";
    //     }
    //   ),
    //   builder.addCase(fetchKifiProductCategory.rejected, (state) => {
    //     state.ApiStatus = "error";
    //   });

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
      // builder.addCase(fetchKifiProductListing.pending, (state) => {
      //   state.ApiStatus = "loading";
      // }),
      //   builder.addCase(
      //     fetchKifiProductListing.fulfilled,
      //     (state: any, { payload }) => {
      //       state.data = payload;
      //       state.ApiStatus = "success";
      //     }
      //   ),
      //   builder.addCase(fetchKifiProductListing.rejected, (state) => {
      //     state.ApiStatus = "error";
      //   });
  },
});

export default KifiSlice.reducer;
