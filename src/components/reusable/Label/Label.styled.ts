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
`;
