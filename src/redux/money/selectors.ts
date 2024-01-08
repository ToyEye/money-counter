import { createSelector } from "reselect";

import { IMoney } from "../../types/types";

type TMoney = { money: IMoney };

export const getExpenses = (state: TMoney) => state.money.expenses;

export const getIncome = (state: TMoney) => state.money.income;

export const getSummary = createSelector(
  [getExpenses, getIncome],
  (expenses, income) => {
    return [...expenses, ...income];
  }
);
