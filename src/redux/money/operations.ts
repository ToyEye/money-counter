import { FirebaseError } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, remove, update, push } from "firebase/database";
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
    const typeArrayRef = ref(database, `/users/${userId}/money/${type}`);

    try {
      const newObjectRef = push(typeArrayRef);
      const newObjectKey = newObjectRef.key;

      const newAddedNote = {
        ...newNote,
        id: newObjectKey,
      };

      await update(typeArrayRef, { [newObjectKey as string]: newAddedNote });

      return newAddedNote;
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
      const noteRef = ref(database, `/users/${userId}/money/${type}/${id}`);

      remove(noteRef);

      return { id, type };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("Firebase error:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error("Unexpected error:", error);
        return thunkAPI.rejectWithValue(
          "An error occurred while deleting the entry.."
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
      if (type === changes.changedType) {
        const typeRef = ref(
          database,
          `/users/${userId}/money/${type}/${changes.id}`
        );
        update(typeRef, changes);

        return { changes, type };
      } else {
        const deletingTypeRef = ref(
          database,
          `/users/${userId}/money/${type}/${changes.id}`
        );

        const newTypeRef = ref(
          database,
          `/users/${userId}/money/${changes.changedType}/`
        );

        const newObj = {
          [changes.id as string]: { ...changes, type: changes.changedType },
        };

        remove(deletingTypeRef);
        update(newTypeRef, newObj);

        return { changes, type };
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("Firebase error:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.error("Unexpected error:", error);
        return thunkAPI.rejectWithValue(
          "An error occurred while making changes."
        );
      }
    }
  }
);
