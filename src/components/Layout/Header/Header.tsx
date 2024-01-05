import { router } from "../../../routes";
import { NavLinkStyled, Header, NavList } from "./Header.styled";

const HeaderLayout = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <NavLinkStyled to={router.HOME}>Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={router.COUNT}>Count</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={router.SIGNUP}>Sign up</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={router.LOGIN}>Login</NavLinkStyled>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};

export default HeaderLayout;