import styled from "styled-components";

export const TableRow = styled.tr`
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableData = styled.td`
  padding: 15px;
`;
