import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  margin-top: 30px;
  padding: 15px;
  box-shadow: -1px -2px 23px 9px rgba(71, 71, 71, 0.53);
  -webkit-box-shadow: -1px -2px 23px 9px rgba(71, 71, 71, 0.53);
  -moz-box-shadow: -1px -2px 23px 9px rgba(71, 71, 71, 0.53);
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 15px;
`;

export const TableData = styled.td`
  padding: 15px;
`;
