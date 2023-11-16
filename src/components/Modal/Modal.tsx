import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { ModalWrapper } from "./Modal.styled";

const modalPortal = document.querySelector("#modal-root");

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  if (!modalPortal) {
    return;
  }

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalPortal);
};

export default Modal;
