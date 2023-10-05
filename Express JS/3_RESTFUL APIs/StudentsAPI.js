const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000;

const fetchedData = JSON.parse(fs.readFileSync("StudentsRecord.json", "utf-8"));

console.log(fetchedData);

app.get("/students/list", (req, res) => {
  res.json(fetchedData);
});

app.get("/students/list/:ID", (req, res) => {
  let filteredStudent = fetchedData.filter((ele, index) => {
    return ele.ID === Number(req.params["ID"]);
  });
  res.json(filteredStudent);
});

app.get("/students/list/:ID/totalmarks/", (req, res) => {
  let filteredStudent = fetchedData.filter((ele, index) => {
    return ele.ID == Number(req.params["ID"]);
  });

  let totalMarks =
    filteredStudent[0].Physics +
    filteredStudent[0].Maths +
    filteredStudent[0].English;

  console.log(`Total Marks of St_Id : ${req.params["ID"]} is ${totalMarks}`);

  res
    .status(200)
    .send(
      `Total Marks of St_Id : ${req.params["ID"]} with \n Name : ${filteredStudent[0].Name} is ${totalMarks}`
    );
});

app.listen(port, () => {
  console.log(`Your Server is Running Successfully ! At port ${port}`);
});
