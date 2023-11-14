import React, { useState } from "react";

import Form from "../Form/Form";

import { IValues } from "../../types/types";

const Expenses = () => {
  const [expenses, setExpenses] = useState<IValues[]>([]);

  const addExpense = (expense: IValues) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };
  console.log(expenses);
  return (
    <div>
      Expense
      <Form onSubmit={addExpense} />
    </div>
  );
};

export default Expenses;
