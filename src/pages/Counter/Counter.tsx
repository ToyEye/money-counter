import {
  TabListStyled,
  TabPanelStyled,
  TabStyled,
  TabsStyled,
  AppWrapper,
  TabWrapper,
} from "./Counter.styled";
import MoneyCounter from "../../components/MoneyCounter/MoneyCounter";

const Counter = () => {
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
};

export default Counter;
