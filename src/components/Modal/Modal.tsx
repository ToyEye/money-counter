import { createPortal } from "react-dom";

import { ModalWrapper } from "./Modal.styled";
import { ChildrenProps } from "/@/types";

const modalPortal = document.querySelector("#modal-root");

const Modal = ({ children }: ChildrenProps) => {
  if (!modalPortal) {
    return;
  }

  return createPortal(
    <ModalWrapper
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ scale: 0 }}
    >
      {children}
    </ModalWrapper>,
    modalPortal
  );
};

export default Modal;
