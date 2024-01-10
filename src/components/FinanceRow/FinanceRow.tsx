import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { MdOutlineChangeCircle, MdDeleteForever } from "react-icons/md";

import { TableData, TableRow, BtnWrapper } from "./FinanceRow.styled";
import Modal from "../Modal/Modal";
import ChangeForm from "../Form/ChangeForm/ChangeForm";
import { Button } from "/@/components/reusable";

import { deleteExpense } from "/@/redux/money/reducer";
import { IValues } from "/@/types/types";

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
      <TableRow
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ y: -300 }}
      >
        <TableData className={operation.type}>{operation.price}</TableData>
        <TableData>{operation.description}</TableData>
        <TableData>{operation.date}</TableData>

        {type !== "summary" && (
          <BtnWrapper>
            <Button type="button" onClick={toggleModal} className="finance">
              <MdOutlineChangeCircle size={24} />
            </Button>
            <Button
              className="finance"
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
      <AnimatePresence initial={false}>
        {isModalOpen && (
          <Modal>
            <ChangeForm
              operation={operation}
              toggleModal={toggleModal}
              type={type}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FinanceRow;
