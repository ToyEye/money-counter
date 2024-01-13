import { FirebaseError } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { auth, database } from "/@/firebase";

export const getMoney = createAsyncThunk(
  "money/getMoney",
  async (_, thunkAPI) => {
    try {
      const userId = auth.currentUser?.uid;
      const moneyRef = ref(database, `users/${userId}/money`);

      const snapshot = await get(moneyRef);

      if (snapshot.exists()) {
        const moneyData = snapshot.val();

        return moneyData;
      } else {
        console.warn("User data not found");
        throw new Error("User data not found");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Firebase error:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error("Unexpected error:", error);
        return thunkAPI.rejectWithValue(
          "An unexpected error occurred while fetching data"
        );
      }
    }
  }
);
