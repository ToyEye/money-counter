import { router } from "../../routes";
import { NavLinkStyled } from "../Layout/Header/Header.styled";

const AuthBar = () => {
  return (
    <>
      <li>
        <NavLinkStyled to={router.SIGNUP}>Sign up</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to={router.LOGIN}>Login</NavLinkStyled>
      </li>
    </>
  );
};

export default AuthBar;
