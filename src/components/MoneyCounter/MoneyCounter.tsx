import { AddForm } from "../Form";

import { Heading } from "/@/components/reusable";
import FinanceTable from "../FinanceTable/";

const MoneyCounter = ({ type = "expenses" }) => {
  return (
    <div>
      <Heading as="h1" className={type}>
        {type}
      </Heading>
      {type !== "summary" && <AddForm type={type} />}
      <FinanceTable type={type} />
    </div>
  );
};

export default MoneyCounter;
