const express = require("express");

const myRouter = express.Router();

myRouter.use("/routerlevelmiddleware", (req, res, next) => {
  console.log(
    "This is Router Level MiddleWare Executes When This Route Hits !!"
  );
  next();
  res.send("Router Level Middleware Hits !!");
});

module.exports = myRouter;
