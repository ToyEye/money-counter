import { TAuth } from "../../types/types";

type TSelect = {
  auth: TAuth;
};

export const authSelector = (state: TSelect) => state.auth;
