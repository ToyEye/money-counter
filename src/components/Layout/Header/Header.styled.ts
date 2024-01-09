import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  height: 20px;

  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 15px 0;
  color: black;

  font-weight: 700;
  font-size: 18px;

  transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:is(:hover, :focus) {
    transform: scale(1.2);
  }

  &.active {
    color: #007bff;
  }
`;
