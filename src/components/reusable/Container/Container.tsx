import { ContainerStyled } from "./Container.styled";
import { ChildrenProps } from "/@/types";

const Container = ({ children }: ChildrenProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
