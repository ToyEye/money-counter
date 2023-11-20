import FinanceRow from "../FinanceRow/FinanceRow";
import { useSelector } from "react-redux";

import Section from "../Section/Section";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./FinanceTable.style";

import { IValues, TType } from "../../types/types";

const FinanceTable = ({ type }: TType) => {
  const account = useSelector((state) => state[type]);

  return (
    <Section>
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
            return (
              <FinanceRow
                key={operation.id}
                operation={operation}
                type={type}
              />
            );
          })}
        </TableBody>
      </Table>
    </Section>
  );
};

export default FinanceTable;
