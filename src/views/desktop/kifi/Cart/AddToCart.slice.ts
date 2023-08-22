import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiAddToCart } from "../../../../api/kifi";

export const fetchKifiCartAdd = createAsyncThunk("AddTo/Cart", async (param:any) => {
//   console.log("redux cart update",param?.data);
  // console.log("redux cart update id",id);

  
  {
    const response = await ApiAddToCart(
    " ",
         
    param?.token,
    param?.data
   );
    return response;
  }
});

interface KifiCartAddState {
  data: any | void;
  ApiStatus: "inital" | "loading" | "success" | "error";
}

// Define the initial state using that type
const initialState: KifiCartAddState = {
  data: [],
  ApiStatus: "inital",
};

export const KifiCartAddSlice = createSlice({
  name: "CartAdd",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchKifiCartAdd.pending, (state) => {
      state.ApiStatus = "loading";
    }),
      builder.addCase(
        fetchKifiCartAdd.fulfilled,
        (state: any, { payload }) => {
          state.data = payload;
          state.ApiStatus = "success";
        }
      ),
      builder.addCase(fetchKifiCartAdd.rejected, (state) => {
        state.ApiStatus = "error";
      });
  },
});

export default KifiCartAddSlice.reducer;
