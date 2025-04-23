"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _server = require("react-dom/server");
const _client = require("../client");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
const PORT = 3000;
app.use(_express.default.static(_path.default.join(__dirname, "../../../src/client")));
app.get("/", (_req, res)=>{
    const appHtml = (0, _server.renderToString)(/*#__PURE__*/ _react.default.createElement(_client.App, null));
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./index.css">
        <title>SSR with React</title>
      </head>
      <body>
        <div id="app">${appHtml}</div>
      </body>
    </html>
  `;
    res.send(html);
});
app.listen(PORT, ()=>{
    console.log(`Server is running on ports ${PORT}`);
});

//# sourceMappingURL=index.js.map