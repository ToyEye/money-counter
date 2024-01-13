import { useEffect, useState } from "react";

import {
  TabListStyled,
  TabPanelStyled,
  TabStyled,
  TabsStyled,
  AppWrapper,
  TabWrapper,
} from "./Counter.styled";
import MoneyCounter from "../../components/MoneyCounter/";
import { useAppDispatch } from "/@/hooks/";
import { getMoney } from "/@/redux/money/operations";

const Counter = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstLoad) {
      dispatch(getMoney());
      setFirstLoad(false);
    }
  }, [dispatch, firstLoad]);

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
