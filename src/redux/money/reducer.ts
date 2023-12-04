import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IValues, IMoney, TRedux } from "../../types/types";

type TDelProp = {
  type: string;
  id: string;
};

type TChangeProp = {
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
    addNote: (state, action: PayloadAction<TRedux>) => {
      const { type, newNote } = action.payload;

      state[type as keyof IMoney].push(newNote);
    },
    deleteExpense: (state, action: PayloadAction<TDelProp>) => {
      const { type, id } = action.payload;
      state[type as keyof IMoney] = state[type as keyof IMoney].filter(
        (money) => money.id !== id
      );
    },

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
});

export default moneySlice.reducer;

export const { addNote, deleteExpense, changeExpense } = moneySlice.actions;
