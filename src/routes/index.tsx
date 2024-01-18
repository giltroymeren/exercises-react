import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import Spinner from "../components/Elements/Spinner/Spinner";
import { Outlet, useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<Spinner />}>
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
};

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return element;
};

export default AppRoutes;
