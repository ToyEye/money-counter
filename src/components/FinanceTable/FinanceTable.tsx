import FinanceRow from "../FinanceRow/FinanceRow";
import { useSelector } from "react-redux";
import { getExpenses } from "../../redux/money/selectors";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./FinanceTable.style";

import { IValues } from "../../types/types";

const FinanceTable = () => {
  const account = useSelector(getExpenses);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Price</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {account.map((operation: IValues) => {
          return <FinanceRow key={operation.id} operation={operation} />;
        })}
      </TableBody>
    </Table>
  );
};

export default FinanceTable;
