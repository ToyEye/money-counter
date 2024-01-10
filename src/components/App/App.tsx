import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout";

import { HomePage, CounterPage, SignUpPage, LoginPage } from "/@/pages";

import { router } from "/@/routes";

function App() {
  return (
    <Routes>
      <Route path={router.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={router.COUNT} element={<CounterPage />} />
        <Route path={router.SIGNUP} element={<SignUpPage />} />
        <Route path={router.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
