import { ReactNode } from "react";

export interface IValues {
  price: string;
  description: string;
  date: string;
  id: string;
  type: string;
  changedType?: string;
}

export interface IMoney {
  expenses: TValuesList;
  income: TValuesList;
}

export type TValuesList = IValues[];

export type TType = {
  type: string;
};

export type TRedux = {
  type: string;
  newNote: IValues;
};

export type ChildrenProps = {
  children: ReactNode;
};
