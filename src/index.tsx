import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.less";

import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./routes/NotFound";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
