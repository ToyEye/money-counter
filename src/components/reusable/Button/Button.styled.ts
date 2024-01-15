import styled from "styled-components";

interface ButtonStyle {
  default: {
    "border-radius"?: string;
    padding?: string;
    "text-transform"?: string;
    "background-color"?: string;
    color?: string;
    transition?: string;
    width?: string;
    height?: string;
    border?: string;
    outline?: string;
  };
  active?: {
    transform?: string;
    "background-color"?: string;
    color?: string;
    "border-color"?: string;
  };
  hover?: {
    "background-color"?: string;
    transform?: string;
    color?: string;
  };
}

const buttonStyles: Record<string, ButtonStyle> = {
  changeForm: {
    default: {
      "border-radius": "4px",
      padding: "5px 10px",
      "text-transform": "capitalize",
      "background-color": "#243b6d",
      color: "#fff",
      transition: "350ms cubic-bezier(0.215, 0.61, 0.355, 1)",
    },

    active: {
      transform: "scale(0.9)",
    },

    hover: {
      transform: "scale(1.2)",
    },
  },
  roundBtn: {
    default: {
      "border-radius": "50%",
      width: "40px",
      height: "40px",
      transition: "350ms cubic-bezier(0.19, 1, 0.22, 1)",
      border: "none",
    },
    hover: {
      transform: "scale(1.3)",
      color: "white",
    },
  },
  finance: {
    default: {
      border: "none",

      transition: "350ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    },
    active: {
      transform: "scale(0.8)",
    },

    hover: {
      transform: "scale(1.4)",
    },
  },
  authFormBtn: {
    default: {
      padding: "5px 15px",
      border: "2px solid #00000066",
      "border-radius": "4px",
      outline: "none",

      transition: "350ms cubic-bezier(0.19, 1, 0.22, 1)",
    },
    active: {
      "background-color": "#007bff",
      color: "white",
      "border-color": "transparent",
    },
  },
};

interface IButtonProps {
  goal?: string;
  typeofbtn: string;
}

export const ButtonStyled = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => buttonStyles[props.typeofbtn]?.default}

  &:is(:hover,:focus) {
    ${(props) => buttonStyles[props.typeofbtn]?.hover};
  }

  &:active {
    ${(props) => buttonStyles[props.typeofbtn]?.active};
  }

  &.buttonClose {
    position: absolute;

    top: 5px;
    left: 5px;

    background-color: transparent;
  }

  &.addMoney {
    &:is(:focus, :hover) {
      background-color: ${(props) => {
        return props.goal === "expenses" ? "red" : "green";
      }};
      border-color: ${(props) => {
        return props.goal === "expenses" ? "red" : "green";
      }};
    }
  }
`;
