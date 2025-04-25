import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./index";

const rootEelement = document.getElementById("root");
hydrateRoot(
  rootEelement!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
