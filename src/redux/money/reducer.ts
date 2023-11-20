import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IValues, IMoney, TRedux } from "../../types/types";

type TDelProp = {
  type: string;
  id: string;
};

type TChangeProp = {
  type: string;
  newChanges: IValues;
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

      state[type].push(newNote);
    },
    deleteExpense: (state, action: PayloadAction<TDelProp>) => {
      const { type, id } = action.payload;
      state[type] = state[type].filter((money) => money.id !== id);
    },

    changeExpense: (state, action: PayloadAction<TChangeProp>) => {
      const {
        type,
        newChanges: { price, description, date, id },
      } = action.payload;

      state[type] = state[type].map((money) => {
        return money.id === id ? { ...money, price, description, date } : money;
      });
    },
  },
});

export default moneySlice.reducer;

export const { addNote, deleteExpense, changeExpense } = moneySlice.actions;
