import * as React from "react";
import UsersList from "./features/users/components/UsersList";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <UsersList />
    </MainLayout>
  );
};

export default App;
