import { Navigate } from "react-router-dom";

import { TAccessProps } from "../types";
import { useAuth } from "../hooks";

const PrivatRoute = ({
  component: Component,
  redirectTo = "/",
}: TAccessProps) => {
  const { isLogin, isRefreshing } = useAuth();
  const shouldRedirect = !isLogin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatRoute;
