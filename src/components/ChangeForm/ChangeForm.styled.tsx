import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 14px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 40px 20px 20px;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
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
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputStyled = styled.input`
  width: 100%;
`;
