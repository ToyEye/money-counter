import { useState } from "react";

import Form from "../Form/Form";

import { IValues, TValuesList } from "../../types/types";
import FinanceTable from "../FinanceTable/FinanceTable";

const Expenses = () => {
  const [expenses, setExpenses] = useState<TValuesList>([]);

  const addExpense = (expense: IValues) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      Expense
      <Form onSubmit={addExpense} />
      <FinanceTable account={expenses} />
    </div>
  );
};

export default Expenses;
