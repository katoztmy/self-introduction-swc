import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./index";
import { BrowserRouter } from "react-router-dom";

const rootEelement = document.getElementById("root");
hydrateRoot(
  rootEelement!,
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
