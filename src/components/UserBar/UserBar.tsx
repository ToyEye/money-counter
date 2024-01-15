import { UserBarWrapper } from "./UserBar.styled";
import { Button, Heading } from "/@/components/reusable";

import { useAppDispatch, useAppSelector } from "/@/hooks/";
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
      <Button type="button" onClick={handleLogout} typeofbtn="logoutBtn">
        LogOut
      </Button>
    </UserBarWrapper>
  );
};

export default UserBar;
