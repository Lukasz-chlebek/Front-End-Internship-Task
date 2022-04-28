import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {QueryClient, QueryClientProvider} from "react-query";

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Router>
              <App />
          </Router>
      </QueryClientProvider>
  </React.StrictMode>
);
