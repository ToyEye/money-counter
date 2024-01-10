import UserBar from "/@/components/UserBar";
import AuthBar from "/@/components/AuthBar";
import { List } from "/@/components/reusable";
import { NavLinkStyled, Header } from "./Header.styled";

import { useAppSelector } from "/@/hooks/";

import { router } from "/@/routes";
import { authSelector } from "/@/redux/auth/selectors";

const HeaderLayout = () => {
  const { isLogin } = useAppSelector(authSelector);

  return (
    <Header>
      <nav>
        <List display="flex" gap="35px" content="center">
          <li>
            <NavLinkStyled to={router.HOME}>Home</NavLinkStyled>
          </li>

          {isLogin && (
            <li>
              <NavLinkStyled to={router.COUNT}>Count</NavLinkStyled>
            </li>
          )}
        </List>
      </nav>
      {isLogin ? <UserBar /> : <AuthBar />}
    </Header>
  );
};

export default HeaderLayout;
