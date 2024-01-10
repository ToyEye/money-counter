import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Loader } from "/@/components/reusable";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
