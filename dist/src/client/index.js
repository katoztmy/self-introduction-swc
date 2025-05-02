import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About.js";
import { Home } from "./Home.js";
import { Detail } from "./Detail.js";
import { NotFound } from "./NotFound.js";
export const App = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Routes, {
            children: [
                /*#__PURE__*/ _jsx(Route, {
                    path: "/about",
                    element: /*#__PURE__*/ _jsx(About, {})
                }),
                /*#__PURE__*/ _jsx(Route, {
                    path: "/",
                    element: /*#__PURE__*/ _jsx(Home, {})
                }),
                /*#__PURE__*/ _jsx(Route, {
                    path: "/detail",
                    element: /*#__PURE__*/ _jsx(Detail, {})
                }),
                /*#__PURE__*/ _jsx(Route, {
                    path: "*",
                    element: /*#__PURE__*/ _jsx(NotFound, {})
                })
            ]
        })
    });
};

//# sourceMappingURL=index.js.map