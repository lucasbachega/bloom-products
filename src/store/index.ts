import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productsSlice from "./reducers/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

// Tipagem dos hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
