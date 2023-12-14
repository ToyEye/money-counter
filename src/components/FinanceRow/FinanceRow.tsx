import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineChangeCircle, MdDeleteForever } from "react-icons/md";

import { TableData, TableRow, BtnWrapper, Button } from "./FinanceRow.styled";
import Modal from "../Modal/Modal";
import ChangeForm from "../Form/ChangeForm/ChangeForm";

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
        <TableData className={operation.type}>{operation.price}</TableData>
        <TableData>{operation.description}</TableData>
        <TableData>{operation.date}</TableData>
        {/* <TableData></TableData> */}
        {type !== "summary" && (
          <BtnWrapper>
            <Button type="button" onClick={toggleModal}>
              <MdOutlineChangeCircle size={24} />
            </Button>
            <Button
              type="button"
              onClick={() =>
                dispatch(deleteExpense({ type, id: operation.id }))
              }
            >
              <MdDeleteForever size={24} />
            </Button>
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
