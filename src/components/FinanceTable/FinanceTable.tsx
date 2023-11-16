import FinanceRow from "../FinanceRow/FinanceRow";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./FinanceTable.style";

import { TValuesList, IValues } from "../../types/types";

type Props = {
  account: TValuesList;
  deleteNote: (arg: string) => void;
  changeNote: (arg: IValues) => void;
};

const FinanceTable = ({ account, deleteNote, changeNote }: Props) => {
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
          return (
            <FinanceRow
              key={operation.id}
              operation={operation}
              deleteNote={deleteNote}
              changeNote={changeNote}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default FinanceTable;
