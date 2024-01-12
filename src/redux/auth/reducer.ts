import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, signUpUser, logout, getCurrentUser } from "./operation";
import { TAuth, User } from "../../types/types";

const initialState: TAuth = {
  user: { name: "", email: "" },
  isLogin: false,
  token: null,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const handlePending = (state: TAuth) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: TAuth, action: PayloadAction<User>) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = action.payload ? action.payload.toString() : null;
};

const handleFulfilled = (
  state: TAuth,
  action: { payload: User | undefined }
) => {
  state.isLoading = false;
  if (action.payload) {
    state.user.email = action.payload.email;
    state.user.name = action.payload.displayName;
    state.token = action.payload.accessToken;
    state.isLogin = true;
  }
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(signUpUser.fulfilled, handleFulfilled)
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user.email = "";
        state.user.name = "";
        state.token = null;
        state.isLogin = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.token = action.payload.accessToken;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export default authSlice.reducer;
