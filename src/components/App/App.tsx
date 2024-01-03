import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout/Layout";

import Home from "../../pages/Home/Home";
import Counter from "../../pages/Counter/Counter";

import { router } from "../../routes";

function App() {
  return (
    <Routes>
      <Route path={router.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={router.COUNT} element={<Counter />} />
      </Route>
    </Routes>
  );
}

export default App;
