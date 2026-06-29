import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

/**
 * Redux store. Slices are local/UI-only for now (design phase).
 * RTK Query API slices will be added during backend integration.
 */
export const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
