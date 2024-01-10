import { UserBarWrapper } from "./UserBar.styled";
import { Heading } from "../reusable/Heading/Heading.styled";

import { useAppDispatch, useAppSelector } from "/@/hooks/useReduxHooks";
import { logout } from "/@/redux/auth/operation";
import { authSelector } from "/@/redux/auth/selectors";

const UserBar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(authSelector);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <UserBarWrapper>
      <Heading as="h4">{user.name}</Heading>
      <button type="button" onClick={handleLogout}>
        LogOut
      </button>
    </UserBarWrapper>
  );
};

export default UserBar;
