import { Navigate } from "react-router-dom";

import { TAccessProps } from "../types";
import { useAuth } from "../hooks";

const PublicRoute = ({
  component: Component,
  redirectTo = "/",
}: TAccessProps) => {
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
