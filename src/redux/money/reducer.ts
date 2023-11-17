import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IValues, IMoney } from "../../types/types";

const initialState: IMoney = {
  expenses: [],
  income: [],
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IValues>) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    changeExpense: (state, action: PayloadAction<IValues>) => {
      const { id, description, price, date } = action.payload;

      state.expenses = state.expenses.map((expense) => {
        return expense.id === id
          ? { ...expense, price, description, date }
          : expense;
      });
    },
  },
});

export default moneySlice.reducer;

export const { addExpense, deleteExpense, changeExpense } = moneySlice.actions;
