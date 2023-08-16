const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;
const publicDir = path.join(__dirname, "public");
const studentPageDir = path.join(__dirname, "public", "index.html");
const errorPageDir = path.join(__dirname, "public", "404.html");

app.use(express.static(publicDir));

app.get("/index.html", (req, res) => {
  res.status(200).sendFile(studentPageDir);
});

app.get("*", (req, res) => {
  res.status(404).sendFile(errorPageDir);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
