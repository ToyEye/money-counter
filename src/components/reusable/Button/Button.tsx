import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

type ButtonProps = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
  type?: string;
  goal?: string;
};

const Button = ({ children, onClick, className, goal }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} className={className} goal={goal}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
