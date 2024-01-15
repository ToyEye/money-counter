import styled from "styled-components";

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  counter?: number;
  type?: string;
  primary?: string;
}

type P = {
  counter?: number;
  color?: string | undefined;
  type?: string;
};

const setColor = ({ type, counter, color }: P): string | undefined => {
  switch (type) {
    case "summary":
      if (counter) {
        return counter > 0 ? "green" : "red";
      }
      break;
    case "expenses":
      return "red";

    case "income":
      return "green";

    case "custom":
      return color;

    default:
      return "black";
  }
};

export const Heading = styled((props: HeadingProps) => props.as || "h2")`
  font-weight: 700;
  font-size: ${(props) => (props.primary ? "44px" : "22px")};
  text-align: center;
  text-transform: capitalize;

  color: ${(props) => setColor(props)};

  &.primaryTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
