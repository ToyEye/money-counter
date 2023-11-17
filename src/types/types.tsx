export interface IValues {
  price: string;
  description: string;
  date: string;
  id: string;
}

export type TValuesList = IValues[];

export interface IMoney {
  expenses: TValuesList;
  income: TValuesList;
}
