import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableData, TableRow } from "./FinanceRow.styled";

import Modal from "../Modal/Modal";
import ChangeForm from "../ChangeForm/ChangeForm";

import { deleteExpense } from "../../redux/money/reducer";
import { IValues } from "../../types/types";

type Props = {
  operation: IValues;
};

const FinanceRow = ({ operation }: Props) => {
  const dispatch = useDispatch();

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
          <button
            type="button"
            onClick={() => dispatch(deleteExpense(operation.id))}
          >
            X
          </button>
        </TableData>
      </TableRow>
      {isModalOpen && (
        <Modal>
          <ChangeForm operation={operation} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default FinanceRow;
