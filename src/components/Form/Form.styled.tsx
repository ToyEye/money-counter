import styled from "styled-components";

type BtnProps = {
  goal: string;
};

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

export const SubmitBtn = styled.button<BtnProps>`
  display: flex;
  padding: 15px 5px;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

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
`;
