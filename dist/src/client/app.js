import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./index";
const rootEelement = document.getElementById("root");
hydrateRoot(rootEelement, /*#__PURE__*/ _jsx(React.StrictMode, {
    children: /*#__PURE__*/ _jsx(App, {})
}));

//# sourceMappingURL=app.js.map