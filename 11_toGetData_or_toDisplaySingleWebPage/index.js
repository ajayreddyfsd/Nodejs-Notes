//! all the below code trying to do is to read the index.html file which is in the same folder
//! why is it reading in the first place?

//$ lets understand, when user enter url in browser, essentially the server is getting hit with a get request.
//$ server is getting hit, but it doesnt know what to give back to user
//$ so thats why we are making it read/feed the html file first, which later, it needs to give back to the browser

//@ so in order for server to display web pages to server, it needs to read them first
//@ we can read in two ways, normal-reading and stream-based-reading

const http = require("http");
const fs = require("fs");
const path = require("path"); // optional but safer for file paths

const server = http.createServer((req, res) => {
  // Handle GET request for "/"
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "index.html"); // safer relative path

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
  // fallback for any other routes
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
