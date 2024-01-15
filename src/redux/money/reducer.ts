import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IValues, IMoney } from "../../types/types";
import { getMoney, addNoteE, removeNote } from "./operations";

export type TChangeProp = {
  type: string;
  changes: IValues;
};

const initialState: IMoney = {
  expenses: [],
  income: [],
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    changeExpense: (state, action: PayloadAction<TChangeProp>) => {
      const { type, changes } = action.payload;

      if (type === changes.changedType) {
        state[type as keyof IMoney] = state[type as keyof IMoney].map(
          (money) => {
            return money.id === changes.id
              ? {
                  ...money,
                  price: changes.price,
                  description: changes.description,
                  date: changes.date,
                }
              : money;
          }
        );
      } else {
        const newNote = { ...changes, type: changes.changedType };

        state[changes.changedType as keyof IMoney].push(newNote);

        state[type as keyof IMoney] = state[type as keyof IMoney].filter(
          (money) => {
            return money.id !== changes.id;
          }
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMoney.fulfilled, (state, action) => {
        state.expenses = action.payload?.expenses ?? [];
        state.income = action.payload?.income ?? [];
      })
      .addCase(addNoteE.fulfilled, (state, action) => {
        const { type, newNote } = action.meta.arg;

        state[type as keyof IMoney].push(newNote);
      })
      .addCase(removeNote.fulfilled, (state, action) => {
        const { type, withOutDeleteId } = action.payload;
        state[type as keyof IMoney] = withOutDeleteId;
      });
  },
});

export default moneySlice.reducer;

export const { changeExpense } = moneySlice.actions;
