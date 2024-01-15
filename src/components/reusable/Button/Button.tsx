import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  goal?: string;
  type: string;
  typeofbtn?: string;
};

const Button = ({
  children,
  onClick,
  className = "",
  goal = "",
  typeofbtn = "",
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      className={className}
      goal={goal}
      typeofbtn={typeofbtn}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
