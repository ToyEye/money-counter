import { createSelector } from "reselect";

import { IMoney } from "../../types/types";

export const getExpenses = (state: IMoney) => state.expenses;

export const getIncome = (state: IMoney) => state.income;

export const getSummary = createSelector(
  [getExpenses, getIncome],
  (expenses, income) => {
    return [...expenses, ...income];
  }
);
