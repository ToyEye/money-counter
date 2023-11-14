import {
  TabListStyled,
  TabPanelStyled,
  TabStyled,
  TabsStyled,
  AppWrapper,
  TabWrapper,
} from "./App.styled";
import Expenses from "../Expenses/Expenses";

function App() {
  return (
    <AppWrapper>
      <TabsStyled>
        <TabListStyled>
          <TabStyled>Expenses </TabStyled>

          <TabStyled>Income </TabStyled>
        </TabListStyled>
        <TabWrapper>
          <TabPanelStyled>
            <Expenses />
          </TabPanelStyled>
          <TabPanelStyled>dasnndsmandsadasd</TabPanelStyled>
        </TabWrapper>
      </TabsStyled>
      <div></div>
    </AppWrapper>
  );
}

export default App;
