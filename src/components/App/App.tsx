import {
  TabListStyled,
  TabPanelStyled,
  TabStyled,
  TabsStyled,
  AppWrapper,
  TabWrapper,
} from "./App.styled";
import MoneyCounter from "../MoneyCounter/MoneyCounter";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <AppWrapper>
      <TabsStyled>
        <TabListStyled>
          <TabStyled>Summary </TabStyled>

          <TabStyled>Expenses </TabStyled>

          <TabStyled>Income </TabStyled>
        </TabListStyled>
        <TabWrapper>
          <TabPanelStyled>
            <MoneyCounter type="summary" />
          </TabPanelStyled>
          <TabPanelStyled>
            <MoneyCounter type="expenses" />
          </TabPanelStyled>
          <TabPanelStyled>
            <MoneyCounter type="income" />
          </TabPanelStyled>
        </TabWrapper>
      </TabsStyled>
    </AppWrapper>
  );
}

export default App;
