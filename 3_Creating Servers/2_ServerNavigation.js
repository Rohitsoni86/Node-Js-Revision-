const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("This is Landing Page !");
    res.end();
  } else if (req.url == "/home") {
    res.write("This is my Home Page !");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("Requested About Page !");
    res.write("This is my About Page !");
    res.end();
  } else if (req.url == "/contact") {
    res.write("This is my Contact Page !");
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>This page is Not found On Server !</h1>");
  }
});

try {
  myServer.listen(8000, () => {
    console.log("Your Server is Running Successfully on Port 8000 !");
  });
} catch (err) {
  console.log(err);
}
