import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { listProducts } from "../../services/api";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const products = await listProducts();
  return products;
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
    setLayoutMode(state, action: PayloadAction<"list" | "grid">) {
      state.layoutMode = action.payload;
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
export const { toggleLayoutMode, setLayoutMode } = productsSlice.actions;

export default productsSlice.reducer;

type ProductFilter = "all" | "discounted" | "regular";

export const selectProducts = createSelector(
  [
    (state: RootState) => state.products.items,
    (state: RootState, filter: ProductFilter) => filter,
  ],
  (products, filter) => {
    if (filter === "discounted") {
      return products.filter((p) => p.hasDiscount);
    }
    if (filter === "regular") {
      return products.filter((p) => !p.hasDiscount);
    }
    return products;
  }
);
