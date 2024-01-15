import { Navigate, Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout";
import PublicRoute from "../PublicRoute";
import PrivatRoute from "../PrivatRoute";

import { router } from "/@/routes";
import { lazy, useEffect } from "react";

import { getCurrentUser } from "/@/redux/auth/operation";
import { useAppDispatch } from "/@/hooks";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={router.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={router.COUNT}
          element={
            <PrivatRoute
              redirectTo={router.LOGIN}
              component={<CounterPage />}
            />
          }
        />
        <Route
          path={router.SIGNUP}
          element={
            <PublicRoute redirectTo={router.COUNT} component={<SignUpPage />} />
          }
        />
        <Route
          path={router.LOGIN}
          element={
            <PublicRoute redirectTo={router.COUNT} component={<LoginPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
