import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const AppWrapper = styled.div`
  /* height: 100vh; */
`;

export const TabsStyled = styled(Tabs)`
  /* display: flex; */
`;

export const TabListStyled = styled(TabList)`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  gap: 15px;
  margin-bottom: 30px;

  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #084a31;
`;

export const TabWrapper = styled.div`
  width: 100%;
`;

export const TabStyled = styled(Tab)`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: 350ms cubic-bezier(0.19, 1, 0.22, 1);

  &.react-tabs__tab--selected {
    text-decoration: underline;
    color: #007bff;
  }
`;

export const TabPanelStyled = styled(TabPanel)``;
