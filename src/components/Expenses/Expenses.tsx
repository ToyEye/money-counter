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

  const changeNote = (id: string, text: string) => {
    setExpenses((prev) => {
      return prev.map((expense) => {
        return expense.id === id ? { ...expense, description: text } : expense;
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
