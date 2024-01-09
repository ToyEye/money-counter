import FinanceRow from "../FinanceRow/FinanceRow";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Section from "../reusable/Section/Section";
import { Heading } from "../reusable/Heading/Heading.styled";

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
  const [count, setCount] = useState(0);

  const account = useReduxState(type);

  const sort = sortForDate(account);

  useEffect(() => {
    const sortMoney = (type: string): number => {
      return account
        .filter((t) => t.type === type)
        .map((t) => t.price)
        .reduce((sum, mon) => sum + Number(mon), 0);
    };

    if (type === "summary") {
      const expressMoney = sortMoney("expenses");

      const incomeMoney = sortMoney("income");

      setCount(incomeMoney - expressMoney);
    } else {
      const count = account
        .map((t) => t.price)
        .reduce((sum, t) => sum + Number(t), 0);
      setCount(count);
    }
  }, [account, type]);

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
          <AnimatePresence initial={false}>
            {sort.map((operation: IValues) => {
              return (
                <FinanceRow
                  key={operation.id}
                  operation={operation}
                  type={type}
                />
              );
            })}{" "}
          </AnimatePresence>
        </TableBody>
      </Table>
      <Heading as="h1" className={type} count={count > 0 ? true : false}>
        Total: <span>{count}</span>
      </Heading>
    </Section>
  );
};

export default FinanceTable;
