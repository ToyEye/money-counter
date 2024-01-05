import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout/Layout";

import Home from "../../pages/Home/Home";
import Counter from "../../pages/Counter/Counter";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";

import { router } from "../../routes";

function App() {
  return (
    <Routes>
      <Route path={router.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={router.COUNT} element={<Counter />} />
        <Route path={router.SIGNUP} element={<SignUp />} />
        <Route path={router.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
