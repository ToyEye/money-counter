import Form from "../Form/AddForm/Form";

import { Heading } from "../reusable/Heading/Heading.styled";
import FinanceTable from "../FinanceTable/FinanceTable";

const MoneyCounter = ({ type = "expenses" }) => {
  return (
    <div>
      <Heading as="h1" className={type}>
        {type}
      </Heading>
      {type !== "summary" && <Form type={type} />}
      <FinanceTable type={type} />
    </div>
  );
};

export default MoneyCounter;
