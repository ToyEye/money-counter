import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout";

import { router } from "/@/routes";
import { lazy } from "react";

const HomePage = lazy(() =>
  import("/@/pages").then((module) => ({ default: module.HomePage }))
);

const CounterPage = lazy(() =>
  import("/@/pages").then((module) => ({ default: module.CounterPage }))
);

const SignUpPage = lazy(() =>
  import("/@/pages").then((module) => ({ default: module.SignUpPage }))
);

const LoginPage = lazy(() =>
  import("/@/pages").then((module) => ({ default: module.LoginPage }))
);

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
