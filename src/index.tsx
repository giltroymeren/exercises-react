import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.less";

import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./features/not-found/NotFound";
import Spinner from "./components/Elements/Spinner";
import UserProfile from "./features/users/components/UserProfile";
import NiceModal from "@ebay/nice-modal-react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/user/:id" element={<UserProfile />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </NiceModal.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
