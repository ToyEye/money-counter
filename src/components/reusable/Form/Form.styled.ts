import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &.addForm {
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
  }

  &.changeForm {
    padding: 40px 20px 20px;
  }
`;
