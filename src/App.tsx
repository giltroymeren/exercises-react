import * as React from "react";
import UsersList from "./features/users/components/UsersList";
import MainLayout from "./components/Layout/MainLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./features/not-found/NotFound";
import Spinner from "./components/Elements/Spinner";
import UserProfile from "./features/users/components/UserProfile";
import NiceModal from "@ebay/nice-modal-react";

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index path="/" element={<UsersList />} />
                <Route path="/user/:id" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </NiceModal.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
