import { FirebaseError } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, runTransaction, set, update } from "firebase/database";
import { auth, database } from "/@/firebase";
import { IValues } from "/@/types";
import { TChangeProp } from "./reducer";

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

type TAddNote = {
  type: string;
  newNote: IValues;
};

export const addNoteE = createAsyncThunk(
  "money/addNote",
  async ({ type, newNote }: TAddNote, thunkAPI) => {
    const userId = auth.currentUser?.uid;

    try {
      const typeArrayRef = ref(database, `/users/${userId}/money/${type}`);

      const data = await runTransaction(typeArrayRef, (currentData) => {
        if (!currentData) {
          currentData = [];
        }

        currentData.push(newNote);

        return currentData;
      });
      return data;
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

type TRemove = {
  type: string;
  id: string;
};

export const removeNote = createAsyncThunk(
  "money/removeNote",
  async ({ type, id }: TRemove, thunkAPI) => {
    const userId = auth.currentUser?.uid;
    try {
      const noteRef = ref(database, `/users/${userId}/money/${type}`);

      const snapshot = await get(noteRef);

      if (snapshot.exists()) {
        const moneyData = snapshot.val();
        const withOutDeleteId = moneyData.filter(
          (money: IValues) => money.id !== id
        );
        console.log(withOutDeleteId);
        await set(noteRef, withOutDeleteId);
        return { type, withOutDeleteId };
      } else {
        console.warn("User data not found");
        throw new Error("User data not found");
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("Firebase error:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error("Unexpected error:", error);
        return thunkAPI.rejectWithValue(
          "Произошла ошибка во время удаления записи."
        );
      }
    }
  }
);

export const changeNote = createAsyncThunk(
  "money/changeNote",
  async ({ changes, type }: TChangeProp, thunkAPI) => {
    const userId = auth.currentUser?.uid;

    try {
      const typeRef = ref(database, `/users/${userId}/money/${type}`);
      const changedTypeRef = ref(
        database,
        `/users/${userId}/money/${changes.changedType}`
      );

      const snapshot = await get(typeRef);
      const snapshotChanged = await get(changedTypeRef);

      if (snapshot.exists()) {
        const moneyData = snapshot.val();

        if (changes.changedType === type) {
          const changedMoneyList = moneyData.map((money: IValues) => {
            return money.id === changes.id
              ? {
                  ...money,
                  price: changes.price,
                  description: changes.description,
                  date: changes.date,
                }
              : money;
          });

          set(typeRef, changedMoneyList);
          return changedMoneyList;
        } else if (changes.changedType !== type) {
          const newNote = { ...changes, type: changes.changedType };
          const typeKey = changes.changedType;

          if (!snapshotChanged.exists()) {
            await update(ref(database, `users/${userId}`), {
              money: {
                [typeKey?.toString()]: [newNote],
              },
            });
          } else {
            const moneyDataChanged = snapshotChanged.val();
            console.log(moneyDataChanged);
            const withOutItem = moneyData.filter(
              (money: IValues) => money.id !== changes.id
            );

            const withchanges = [...moneyDataChanged, newNote];

            set(typeRef, withOutItem);
            set(changedTypeRef, withchanges);
          }
        }
      } else {
        console.warn("User data not found");
        throw new Error("User data not found");
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("Firebase error:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error("Unexpected error:", error);
        return thunkAPI.rejectWithValue(
          "Произошла ошибка во время изменения записи."
        );
      }
    }
  }
);
