import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 14px;
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
