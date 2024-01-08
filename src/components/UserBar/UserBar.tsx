import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { logout } from "../../redux/auth/operation";
import { Heading } from "../Heading/Heading.styled";
import { authSelector } from "../../redux/auth/selectors";

const UserBar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(authSelector);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Heading as="h4">{user.name}</Heading>
      <button type="button" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
};

export default UserBar;
