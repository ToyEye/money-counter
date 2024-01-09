import styled from "styled-components";

interface IButtonProps {
  goal?: string;
}

export const ButtonStyled = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  &.changeForm {
    border-radius: 4px;
    padding: 5px 10px;

    text-transform: capitalize;
    background-color: #243b6d;
    color: #fff;

    transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:active {
      transform: scale(0.9);
    }

    &:is(:focus, :hover) {
      background-color: #667daf;
    }
  }

  &.buttonClose {
    position: absolute;

    top: 5px;
    left: 5px;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: transparent;

    transition: 350ms cubic-bezier(0.19, 1, 0.22, 1);

    &:is(:focus, :hover) {
      transform: scale(1.3);
    }
  }

  &.addMoney {
    padding: 15px 5px;

    height: 30px;
    border-radius: 50%;

    transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:is(:focus, :hover) {
      background-color: ${(props) => {
        return props.goal === "expenses" ? "red" : "green";
      }};
      color: white;
      border-color: ${(props) => {
        return props.goal === "expenses" ? "red" : "green";
      }};
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &.finance {
    border: none;

    transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:is(:hover, :focus) {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;
