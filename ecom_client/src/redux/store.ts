import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import brandReducer from "./reducers/brandReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    brand: brandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
