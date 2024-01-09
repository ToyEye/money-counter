import styled from "styled-components";

interface ListProps {
  display?: string;
  gap?: string;
  content?: string;
}

export const List = styled.ul<ListProps>`
  display: ${({ display }) => display};
  gap: ${({ gap }) => gap};
  justify-content: ${({ content }) => content};
`;
