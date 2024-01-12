import { useSelector } from "react-redux";
import { authSelector } from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useSelector(authSelector);

  return user;
};
