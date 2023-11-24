import { IMoney } from "../../types/types";

export const getExpenses = (state: IMoney) => state.expenses;

export const getIncome = (state: IMoney) => state.income;

export const getSummary = (state: IMoney) => {
  const express = getExpenses(state);
  const income = getIncome(state);

  return [...express, ...income];
};
