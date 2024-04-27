import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import brandReducer from "./reducers/brandReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    brand: brandReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
