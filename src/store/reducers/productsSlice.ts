import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export type ProductsState = {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  layoutMode: "grid" | "list";
};

const initialState: ProductsState = {
  items: [],
  status: "idle",
  layoutMode: "grid",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLayoutMode(state) {
      state.layoutMode = state.layoutMode === "list" ? "grid" : "list";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { toggleLayoutMode } = productsSlice.actions;

export default productsSlice.reducer;
