const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const myRouter = require("./RouterLevelMW");
//Application Middlewares

app.use((req, res, next) => {
  console.log(
    "This is application Level Middleware Run Everytime Application Runs !"
  );
  next();
});

let myStaticPath = path.join(__dirname, "/public/");

app.use(express.static(myStaticPath));

console.log("Static Path", myStaticPath);

//Router Level Middleware

app.use(myRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
