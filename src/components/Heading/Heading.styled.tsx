import styled from "styled-components";

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  count?: boolean;
}

export const Heading = styled((props: HeadingProps) => props.as || "h2")`
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;

  color: ${(props) => props.color || "black"};

  &.summary {
    color: ${(props) => (props.count ? "green" : "red")};
  }

  &.expenses {
    color: red;
  }

  &.income {
    color: green;
  }
`;
