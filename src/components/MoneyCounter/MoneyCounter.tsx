import { AddForm } from "../Form";

import { Heading } from "/@/components/reusable";
import FinanceTable from "/@/components/FinanceTable/";
import { Helmet } from "react-helmet";

const MoneyCounter = ({ type = "expenses" }) => {
  return (
    <div>
      <Helmet>
        <title>Counter/{type}</title>
      </Helmet>
      <Heading as="h1" className={type}>
        {type}
      </Heading>
      {type !== "summary" && <AddForm type={type} />}
      <FinanceTable type={type} />
    </div>
  );
};

export default MoneyCounter;
