import { createTransform } from "redux-persist";
import { ProductsState } from "./reducers/productsSlice";

export const layoutModeTransform = createTransform<
  ProductsState,
  Partial<ProductsState>
>(
  (inboundState) => ({
    layoutMode: inboundState.layoutMode,
  }),
  (outboundState) => ({
    items: [],
    status: "idle",
    layoutMode: outboundState.layoutMode ?? "grid",
  }),
  { whitelist: ["products"] }
);
