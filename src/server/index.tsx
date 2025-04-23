import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import { App } from "../client";
import React from "react";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../../../src/client")));

app.get("/", (_req, res) => {
  const appHtml = renderToString(<App />);
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

app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
