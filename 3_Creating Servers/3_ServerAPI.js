const fs = require("fs");
const http = require("http");

const fetchedData = fs.readFileSync("practiceData.json", "utf-8");
console.log(JSON.parse(fetchedData));

const myServer = http.createServer((req, res) => {
  if (req.url == "/data") {
    res.write(fetchedData);
    res.end();
  } else {
    res.end("No Such Page Found !!!");
  }
});

myServer.listen(3000, () => {
  console.log("Your Server is Running Successfully !!");
});
