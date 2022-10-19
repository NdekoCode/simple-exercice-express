const express = require("express");
const path = require("path");

const app = express();
function loadViewFile(viewFile) {
  path.join(__dirname, "views", viewFile + ".html");
}
app.get("/", (req, res) => {
  res.sendFile(path.join(loadViewFile("home")));
});
app.get("/about", (req, res) => {
  res.sendFile(loadViewFile("about"));
});
app.get("/contact", (req, res) => {
  res.sendFile(loadViewFile("contact"));
});

app.listen(process.env.PORT || 5000);
