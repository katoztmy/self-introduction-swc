"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;
const clientBuildPath = _path.default.join(__dirname, "../../../client-build");
app.use(_express.default.static(clientBuildPath));
app.get("/self-introduction", (_req, res)=>{
    res.sendFile(_path.default.join(clientBuildPath, "self-introduction/index.html"));
});
app.get("/", (_req, res)=>{
    res.redirect("/self-introduction/");
});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

//# sourceMappingURL=index.js.map