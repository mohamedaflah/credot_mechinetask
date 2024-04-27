import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import brandReducer from "./reducers/brandReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    brand: brandReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
