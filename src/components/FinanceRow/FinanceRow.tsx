import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableData, TableRow, BtnWrapper } from "./FinanceRow.styled";

import Modal from "../Modal/Modal";
import ChangeForm from "../ChangeForm/ChangeForm";

import { deleteExpense } from "../../redux/money/reducer";
import { IValues } from "../../types/types";

type Props = {
  operation: IValues;
  type: string;
};

const FinanceRow = ({ operation, type }: Props) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <TableRow>
        <TableData className={type}>{operation.price}</TableData>
        <TableData>{operation.description}</TableData>
        <TableData>{operation.date}</TableData>
        {/* <TableData></TableData> */}
        {type !== "summary" && (
          <BtnWrapper>
            <button type="button" onClick={toggleModal}>
              Change
            </button>
            <button
              type="button"
              onClick={() =>
                dispatch(deleteExpense({ type, id: operation.id }))
              }
            >
              X
            </button>
          </BtnWrapper>
        )}
      </TableRow>
      {isModalOpen && (
        <Modal>
          <ChangeForm
            operation={operation}
            toggleModal={toggleModal}
            type={type}
          />
        </Modal>
      )}
    </>
  );
};

export default FinanceRow;
