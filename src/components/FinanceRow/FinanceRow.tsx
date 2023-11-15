import { useState } from "react";
import { IValues } from "../../types/types";
import { TableData, TableRow } from "./FinanceRow.styled";

type Props = {
  operation: IValues;
  deleteNote: (arg: string) => void;
  changeNote: (arg: string, arg2: string) => void;
};

const FinanceRow = ({ operation, deleteNote, changeNote }: Props) => {
  const [input, setInput] = useState(operation.description);

  return (
    <TableRow>
      <TableData>{operation.price}</TableData>
      <TableData>
        {operation.description}
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button type="button" onClick={() => changeNote(operation.id, input)}>
          change
        </button>
      </TableData>
      <TableData>{operation.date}</TableData>
      <TableData>
        <button type="button" onClick={() => deleteNote(operation.id)}>
          X
        </button>
      </TableData>
    </TableRow>
  );
};

export default FinanceRow;
