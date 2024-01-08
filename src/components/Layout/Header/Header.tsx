import { useAppSelector } from "../../../hooks/useReduxHooks";

import { NavLinkStyled, Header, NavList } from "./Header.styled";
import UserBar from "../../UserBar/UserBar";
import AuthBar from "../../AuthBar/AuthBar";
import { router } from "../../../routes";
import { authSelector } from "../../../redux/auth/selectors";

const HeaderLayout = () => {
  const { isLogin } = useAppSelector(authSelector);

  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <NavLinkStyled to={router.HOME}>Home</NavLinkStyled>
          </li>

          {isLogin ? (
            <li>
              <NavLinkStyled to={router.COUNT}>Count</NavLinkStyled>
            </li>
          ) : (
            <AuthBar />
          )}
        </NavList>
      </nav>
      {isLogin && <UserBar />}
    </Header>
  );
};

export default HeaderLayout;
