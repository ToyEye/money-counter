import Form from "../Form/Form";

import FinanceTable from "../FinanceTable/FinanceTable";

const MoneyCounter = ({ type = "expenses" }) => {
  return (
    <div>
      Expense
      <Form type={type} />
      <FinanceTable type={type} />
    </div>
  );
};

export default MoneyCounter;
