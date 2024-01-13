import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import { MdOutlineChangeCircle, MdDeleteForever } from "react-icons/md";

import { Button } from "/@/components/reusable";
import Modal from "../Modal/";
import { ChangeForm } from "../Form";

import { TableData, TableRow, BtnWrapper } from "./FinanceRow.styled";

import { IValues } from "/@/types";
import { removeNote } from "/@/redux/money/operations";
import { useAppDispatch } from "/@/hooks";

type Props = {
  operation: IValues;
  type: string;
};

const FinanceRow = ({ operation, type }: Props) => {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRemove = () => {
    dispatch(removeNote({ type, id: operation.id }));
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
            <Button className="finance" type="button" onClick={handleRemove}>
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
