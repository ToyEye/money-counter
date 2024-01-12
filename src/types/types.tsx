import { ReactNode } from "react";

export interface IValues {
  price: string;
  description: string;
  date: string;
  id: string;
  type: string | undefined;
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

export type User = {
  password?: string | null;
  email: string | null;
  name?: string | null;
  displayName?: string | null;
  accessToken?: string | undefined;
};

export type TAuth = {
  user: User;
  isLogin: boolean;
  token: null | string | undefined;
  isLoading: boolean;
  error: string | null | undefined;
  isRefreshing: boolean;
};

export type TCredential = {
  name?: string;
  email: string;
  password: string;
};

export type TAccessProps = {
  component: ReactNode;
  redirectTo: string;
};
