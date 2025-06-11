// src/store/index.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "./reducers/cartSlice";
import productsSlice from "./reducers/productsSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const productsPersistConfig = {
  key: "products",
  storage,
  whitelist: ["layoutMode"],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  products: persistReducer(productsPersistConfig, productsSlice),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Tipagens
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
