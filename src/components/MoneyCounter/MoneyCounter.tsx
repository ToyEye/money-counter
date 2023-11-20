import Form from "../Form/Form";

import { Heading } from "../Heading/Heading.styled";
import FinanceTable from "../FinanceTable/FinanceTable";

const MoneyCounter = ({ type = "expenses" }) => {
  return (
    <div>
      <Heading as="h1" className={type}>
        {type}
      </Heading>
      <Form type={type} />
      <FinanceTable type={type} />
    </div>
  );
};

export default MoneyCounter;
