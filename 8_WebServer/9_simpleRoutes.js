const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/ajay") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>ajay</p>");
    res.end("Welcome to Nodejs!!!!!!!!");
  } else if (req.url === "/ratna") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>ratna</p>");
    res.end("Welcome to Nodejs!!!!!!!!");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(2898, () => {
  console.log("check local host 2898");
});
