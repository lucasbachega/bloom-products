import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICartItem } from "../../types/cart";

type CartState = {
  items: ICartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      } else {
        item.quantity -= 1;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (items) => {
    return items?.length ?? 0;
  }
);

export const selectQuantityByProductId = createSelector(
  [selectCartItems, (state, productId) => productId],
  (items, productId) => {
    const item = items.find((i) => i.id === productId);
    return item?.quantity ?? 0;
  }
);

export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectItemTotalByProductId = createSelector(
  [selectCartItems, (_state: RootState, productId: number) => productId],
  (items, productId) => {
    const item = items.find((i) => i.id === productId);
    return item ? item.price * item.quantity : 0;
  }
);
