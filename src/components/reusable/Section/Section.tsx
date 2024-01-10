import { SectionStyled } from "./Section.styled";
import Container from "../Container";

import { ChildrenProps } from "/@/types";

const Section = ({ children }: ChildrenProps) => {
  return (
    <SectionStyled>
      <Container>{children}</Container>
    </SectionStyled>
  );
};

export default Section;
