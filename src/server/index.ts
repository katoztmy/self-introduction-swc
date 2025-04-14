import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const clientBuildPath = path.join(__dirname, "../../../../client-build");

app.use(express.static(clientBuildPath));

app.get("/self-introduction", (_req, res) => {
  res.sendFile(path.join(clientBuildPath, "self-introduction/index.html"));
});

app.get("/", (_req, res) => {
  res.redirect("/self-introduction/");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
