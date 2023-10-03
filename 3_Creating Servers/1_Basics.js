const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello From Node Js !");
    res.end();
  }
  res.end();
});

try {
  myServer.listen(5000, () => {
    console.log("Your Server Has Started !");
  });
} catch (err) {
  console.log(err);
}
