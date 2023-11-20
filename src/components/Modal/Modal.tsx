import { createPortal } from "react-dom";

import { ModalWrapper } from "./Modal.styled";
import { ChildrenProps } from "../../types/types";

const modalPortal = document.querySelector("#modal-root");

const Modal = ({ children }: ChildrenProps) => {
  if (!modalPortal) {
    return;
  }

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalPortal);
};

export default Modal;
