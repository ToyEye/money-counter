import { useState } from "react";

import Form from "../Form/Form";

import { IValues, TValuesList } from "../../types/types";
import FinanceTable from "../FinanceTable/FinanceTable";

const Expenses = () => {
  const [expenses, setExpenses] = useState<TValuesList>([]);

  const addExpense = (expense: IValues) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const changeNote = (data: IValues) => {
    const { id, description, price, date } = data;

    setExpenses((prev) => {
      return prev.map((expense) => {
        return expense.id === id
          ? { ...expense, price, description, date }
          : expense;
      });
    });
  };

  return (
    <div>
      Expense
      <Form onSubmit={addExpense} />
      <FinanceTable
        account={expenses}
        deleteNote={deleteExpense}
        changeNote={changeNote}
      />
    </div>
  );
};

export default Expenses;
