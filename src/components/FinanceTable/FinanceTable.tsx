import FinanceRow from "../FinanceRow/FinanceRow";

import Section from "../Section/Section";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./FinanceTable.style";

import { sortForDate } from "../../helpers/sortForDate";

import { IValues, TType } from "../../types/types";
import useReduxState from "../../hooks/useReduxState";

const FinanceTable = ({ type }: TType) => {
  const account = useReduxState(type);

  const sort = sortForDate(account);

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
          {sort.map((operation: IValues) => {
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
