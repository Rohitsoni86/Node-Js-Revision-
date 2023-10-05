const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

let myStaticPath = path.join(__dirname, "/public/");

app.use(express.static(myStaticPath));

console.log("Static Path", myStaticPath);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
