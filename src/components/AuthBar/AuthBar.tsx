import { router } from "/@/routes";
import { NavLinkStyled } from "../Layout/Header/Header.styled";

import { List } from "/@/components/reusable";

const AuthBar = () => {
  return (
    <List display="flex" content="center" gap="20px">
      <li>
        <NavLinkStyled to={router.SIGNUP}>Sign up</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to={router.LOGIN}>Login</NavLinkStyled>
      </li>
    </List>
  );
};

export default AuthBar;
