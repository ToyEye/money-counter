import { configureStore } from "@reduxjs/toolkit";

import moneySlice from "./money/reducer";

const store = configureStore({
  reducer: moneySlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
