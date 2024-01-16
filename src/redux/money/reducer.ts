import { createSlice } from "@reduxjs/toolkit";

import { IValues, IMoney } from "../../types/types";
import { getMoney, addNoteE, removeNote, changeNote } from "./operations";

export type TChangeProp = {
  type: string;
  changes: IValues;
};

type T = "expenses" | "income";

const initialState: IMoney = {
  expenses: [],
  income: [],
  error: null,
  isLoading: false,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMoney.fulfilled, (state, action) => {
        state.expenses = Object.values(action.payload?.expenses || []);
        state.income = Object.values(action.payload?.income || []);
      })
      .addCase(addNoteE.fulfilled, (state, action) => {
        const { type, newNote } = action.meta.arg;

        state[type as T].push(newNote);
      })
      .addCase(removeNote.fulfilled, (state, action) => {
        const { type, id } = action.payload;
        state[type as T] = state[type as T].filter((money) => {
          return money.id !== id;
        });
      })
      .addCase(changeNote.fulfilled, (state, action) => {
        const { type, changes } = action.payload;
        if (type === changes.changedType) {
          state[type as T] = state[type as T].map((money) => {
            return money.id === changes.id
              ? {
                  ...money,
                  price: changes.price,
                  description: changes.description,
                  date: changes.date,
                }
              : money;
          });
        } else {
          const newNote = { ...changes, type: changes.changedType };

          state[changes.changedType as T].push(newNote);

          state[type as T] = state[type as T].filter((money) => {
            return money.id !== changes.id;
          });
        }
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default moneySlice.reducer;
