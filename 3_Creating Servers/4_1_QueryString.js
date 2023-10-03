const fs = require("fs");
const http = require("http");
const url = require("url");

/* 
📍👉 What is Query String

A query string according to Wikipedia is a part of the uniform resource locator (URL), that assigns values to specified parameters. In plain English it is the string after the ? in a url. Some url examples are shown below.

https://example.com/over/there?name=ferret
https://example.com/path/to/page?name=ferret&color=purple

The query string in first case is name=ferret and
 in second case is name=ferret&color=purple

💫⭐ The Built-in URL Module ⭐

The URL module splits up a web address into readable parts.


*/

const myServer = http.createServer((req, res) => {
  let Qry = url.parse(req.url, true); // parse the url
  console.log(Qry.path); //gives Path
  console.log(Qry.query); //gives all string after ? mark
  console.log(Qry.query.quantity); // quert Parameter
  console.log(Qry.query.price); //quert Parameter
  let quantity = Qry.query.quantity;
  let price = Qry.query.price;
  res.end(`<h1>Your Total Bill is ${quantity * price} </h1>`);
});

myServer.listen(3000, () => {
  console.log("Your Server is Running Successfully !!");
});
