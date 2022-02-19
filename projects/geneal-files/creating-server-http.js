// creting server using http package
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

//reading json data
const data = fs.readFileSync(
  path.join(__dirname, "../dev-data/data.json"),
  "utf8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  //Adding routes to server
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is an overview page");
  } else if (pathName === "/product") {
    res.end("This is a product page");
  } else if (pathName === "/api") {
    2;
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("<h1>404 Not Found</h1>");
  }
});
server.listen(8000, (err, res) => {
  console.log("listening to http://localhost:8000");
});
