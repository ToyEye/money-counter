import { configureStore } from "@reduxjs/toolkit";

import "../firebase";

import moneyReducer from "./money/reducer";
import authReducer from "./auth/reducer";

const store = configureStore({
  reducer: { money: moneyReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
