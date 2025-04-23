"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "App", {
    enumerable: true,
    get: function() {
        return App;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const App = ()=>{
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("h1", null, "Hello, world!"), /*#__PURE__*/ _react.default.createElement("p", null, "This is a simple React app."), /*#__PURE__*/ _react.default.createElement("p", null, "It is rendered on the client side."), /*#__PURE__*/ _react.default.createElement("p", null, "Enjoy coding!"), /*#__PURE__*/ _react.default.createElement("button", {
        onClick: ()=>alert("aho")
    }, "onClick時に関数が仕込んであるがHydrationをさせていないので発火しない"));
};

//# sourceMappingURL=index.js.map