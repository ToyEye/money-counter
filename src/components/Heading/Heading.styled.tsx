import styled from "styled-components";

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  color?: string;
}

export const Heading = styled((props: HeadingProps) => props.as || "h2")`
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;

  color: ${(props) => props.color || "black"};

  &.expenses {
    color: red;
  }

  &.income {
    color: green;
  }
`;
