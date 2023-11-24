import { IValues } from "../types/types";

export const sortForDate = (array: IValues[]): IValues[] => {
  return [...array].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};
