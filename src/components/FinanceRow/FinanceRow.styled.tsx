import styled from "styled-components";
import { motion } from "framer-motion";

export const TableRow = styled(motion.tr)`
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableData = styled.td`
  padding: 15px;

  &.expenses {
    color: red;
  }

  &.income {
    color: green;
  }
`;

export const BtnWrapper = styled(TableData)`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: none;

  transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:is(:hover, :focus) {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.8);
  }
`;
