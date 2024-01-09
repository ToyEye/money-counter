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

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .react-datepicker__tab-loop {
    position: absolute;
  }
`;

export const InputStyled = styled.input`
  width: 320px;
  padding: 6px 10px 5px 25px;
  border-radius: 4px;
  border: 2px solid black;

  outline: none;

  transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:focus {
    border-color: #076b81;
  }
`;

export const RadioBtnThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  div {
    display: flex;
    gap: 12px;
  }

  label {
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }

  input {
    appearance: none;
  }

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 7px;
    border: 1px solid black;
    border-radius: 50%;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:checked + span {
    background-color: #076b81;
    border-color: transparent;
  }
`;
