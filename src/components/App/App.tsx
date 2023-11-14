import { useState } from "react";
import {
  TabListStyled,
  TabPanelStyled,
  TabStyled,
  TabsStyled,
  AppWrapper,
  TabWrapper,
} from "./App.styled";

function App() {
  return (
    <AppWrapper>
      <TabsStyled>
        <TabListStyled>
          <TabStyled>Expenses </TabStyled>

          <TabStyled>Income </TabStyled>
        </TabListStyled>
        <TabWrapper>
          <TabPanelStyled>dasnndsmand</TabPanelStyled>
          <TabPanelStyled>dasnndsmandsadasd</TabPanelStyled>
        </TabWrapper>
      </TabsStyled>
      <div></div>
    </AppWrapper>
  );
}

export default App;
