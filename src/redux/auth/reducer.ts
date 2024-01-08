import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "./operation";
import { TAuth, User } from "../../types/types";

const initialState: TAuth = {
  user: { name: "", email: "" },
  isLogin: false,
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: TAuth) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: TAuth, action: PayloadAction<User>) => {
  state.isLoading = false;
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
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export default authSlice.reducer;
