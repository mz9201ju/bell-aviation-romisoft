// scripts/copy-404.js
import fs from "fs";
fs.copyFileSync("dist/index.html", "dist/404.html");
