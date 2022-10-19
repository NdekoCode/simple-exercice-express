import express from "express";
import path from "path";
import { join } from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
function loadViewFile(res, viewFile) {
  res.sendFile(join(__dirname, "views", viewFile + ".html"));
}
app.get("/", (req, res) => {
  loadViewFile(res, "home");
});
app.get("/about", (req, res) => {
  loadViewFile(res, "about");
});
app.get("/contact", (req, res) => {
  loadViewFile(res, "contact");
});

app.listen(process.env.PORT || 5000);
