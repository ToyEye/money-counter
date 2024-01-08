import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { FirebaseError } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../firebase";
import { TCredential } from "../../types/types";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (credential: TCredential, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      );

      await updateProfile(user, { displayName: credential.name });

      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credential: TCredential, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      );

      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error(error);
        return thunkAPI.rejectWithValue("An error occurred during login.");
      }
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue("An error occurred during logout.");
  }
});
