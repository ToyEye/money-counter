import { useState, useEffect } from "react";
import { IValues } from "../types/types";
import { getExpenses, getIncome, getSummary } from "../redux/money/selectors";
import { useSelector } from "react-redux";

export const useReduxState = (type: string) => {
  const [account, setAccount] = useState<IValues[]>([]);

  const expresses = useSelector(getExpenses);
  const income = useSelector(getIncome);
  const summary = useSelector(getSummary);

  useEffect(() => {
    switch (type) {
      case "income":
        setAccount(income);
        break;

      case "expenses":
        setAccount(expresses);
        break;

      case "summary":
        setAccount(summary);
        break;

      default:
        break;
    }
  }, [expresses, income, summary, type]);

  return account;
};
