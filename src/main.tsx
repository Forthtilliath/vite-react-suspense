import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundaryProvider from "./features/error/ErrorBoundaryProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundaryProvider>
      <App />
    </ErrorBoundaryProvider>
  </React.StrictMode>
);
