import { TValuesList, IValues } from "../../types/types";

import {
  Table,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./FinanceTable.style";

const FinanceTable = ({ account }: TValuesList) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Price</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableData>1520</TableData>
          <TableData>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et
            minus.
          </TableData>
          <TableData>20/20/2015</TableData>
        </TableRow>
        <TableRow>
          <TableData>1520</TableData>
          <TableData>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et
            minus nesciunt nobis placeat eligendi earum totam in non temporibus
            mollitia voluptatem qui ex, vel, eveniet veritatis beatae asperiores
            consequatur!
          </TableData>
          <TableData>20/20/2015</TableData>
        </TableRow>
        {account.map((operation: IValues) => {
          return (
            <TableRow key={operation.id}>
              <TableData>{operation.price}</TableData>
              <TableData>{operation.description}</TableData>
              <TableData>{operation.date}</TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default FinanceTable;
