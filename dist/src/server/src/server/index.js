import { jsx as _jsx } from "react/jsx-runtime";
import express from "express";
import { renderToString } from "react-dom/server";
import { App } from "../client/index.js";
import React from "react";
const app = express();
const PORT = 3000;
app.use(express.static("dist/src/client"));
app.get("/", (_req, res)=>{
    const appHtml = renderToString(/*#__PURE__*/ _jsx(App, {}));
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/index.css">
        <title>SSR with React</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="app.js"></script>
      </body>
    </html>
  `;
    res.send(html);
});
app.listen(PORT, ()=>{
    console.log(`Server is running on ports ${PORT}`);
});

//# sourceMappingURL=index.js.map