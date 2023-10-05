const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000;

const myData = fs.readFileSync("CustomersList.json", "utf-8");

console.log(JSON.parse(myData));

const parsedD = JSON.parse(myData);

app.get("/customers", (req, res) => {
  res.json(JSON.parse(myData));
});

app.get("/customers/list", (req, res) => {
  res.send(JSON.parse(myData));
});

// Params from URL

app.get("/customers/list/customer/:id", (req, res) => {
  let customerId = req.params["id"];
  console.log(customerId);

  let customerDetails = parsedD.filter((ele, index) => {
    return ele.id == customerId;
  });

  console.log(customerDetails);
  res.send(
    `Details of Customer with C_ID ${customerId} is : ${JSON.stringify(
      customerDetails
    )}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
