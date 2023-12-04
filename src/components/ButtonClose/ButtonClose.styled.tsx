import styled from "styled-components";

export const Button = styled.button`
  position: absolute;

  top: 5px;
  left: 5px;

  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: 350ms cubic-bezier(0.19, 1, 0.22, 1);

  &:is(:focus, :hover) {
    transform: scale(1.3);
  }
`;
