import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";
import Spinner from "./components/Elements/Spinner/Spinner";
import MainLayout from "./components/Layout/MainLayout";
import CustomerTable from "./features/customers/components/CustomerTable";
import CustomerProfile from "./features/customers/components/CustomerProfile";
import NotFound from "./features/not-found/NotFound";

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index path="/" element={<CustomerTable />} />
                <Route path="/customer/:id" element={<CustomerProfile />} />
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
