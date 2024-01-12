import styled from "styled-components";

export const InputStyled = styled.input`
  &.changeForm {
    width: 320px;
    padding: 6px 10px 5px 25px;
    border-radius: 4px;
    border: 2px solid black;

    outline: none;

    transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:focus {
      border-color: #076b81;
    }
  }

  &.addForm {
    padding: 5px 10px 5px 10px;
    border-radius: 6px;

    &[name="date"] {
      padding: 5px 10px 5px 25px;
    }
  }

  &.authForm {
    padding: 6px 10px 5px 25px;
    border: 2px solid #00000066;
    border-radius: 4px;

    &:is(:hover, :focus) {
      border-color: #007bff;
    }

    /* &:focus-within {
      border-color: #007bff;
    } */
  }
`;
