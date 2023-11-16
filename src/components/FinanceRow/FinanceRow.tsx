import { useState } from "react";

import { IValues } from "../../types/types";
import { TableData, TableRow } from "./FinanceRow.styled";

import Modal from "../Modal/Modal";
import ChangeForm from "../ChangeForm/ChangeForm";

type Props = {
  operation: IValues;
  deleteNote: (arg: string) => void;
  changeNote: (arg: IValues) => void;
};

const FinanceRow = ({ operation, deleteNote, changeNote }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <TableRow>
        <TableData>{operation.price}</TableData>
        <TableData>{operation.description}</TableData>
        <TableData>{operation.date}</TableData>
        <TableData>
          <button type="button" onClick={toggleModal}>
            Change
          </button>
        </TableData>
        <TableData>
          <button type="button" onClick={() => deleteNote(operation.id)}>
            X
          </button>
        </TableData>
      </TableRow>
      {isModalOpen && (
        <Modal>
          <ChangeForm
            operation={operation}
            changeNote={changeNote}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default FinanceRow;
