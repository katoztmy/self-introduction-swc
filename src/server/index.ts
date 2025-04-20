import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const buildPath = path.join(__dirname, "../../../client-build");

app.use(express.static(buildPath));

app.get("/", (_req, res) => {
  res.sendFile(path.join(buildPath, "self-introduction/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
