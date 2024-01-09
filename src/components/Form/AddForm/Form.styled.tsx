import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .react-datepicker__tab-loop {
    position: absolute;
  }
`;

export const Input = styled.input`
  padding: 5px 10px 5px 10px;
  border-radius: 6px;

  &[name="date"] {
    padding: 5px 10px 5px 25px;
  }
`;
