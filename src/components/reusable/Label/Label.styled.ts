import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  .react-datepicker__tab-loop {
    position: absolute;
  }

  &.addForm {
    gap: 10px;
  }

  &.changeForm {
    gap: 4px;
  }

  &.authForm {
    gap: 10px;
    align-items: center;
    font-size: 20px;

    &:focus-within {
      input {
        border-color: #007bff;
        outline: none;
      }
    }
  }
`;
