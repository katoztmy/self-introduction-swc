import express from "express";
import { renderToString } from "react-dom/server";
import { App } from "../client/index.js";
import React from "react";
import { StaticRouter } from "react-router-dom/server.js";

const app = express();
const PORT = 3000;

app.use(express.static("dist/src/client"));

const generateHtml = (appHtml: any) => `
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

app.get("*path", (req, res) => {
  const appHtml = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(generateHtml(appHtml));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
