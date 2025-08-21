const http = require("http"); // need this to create the server
const fs = require("fs"); // need this to read HTML files
const path = require("path"); // safer handling of file paths

const server = http.createServer((req, res) => {
  let filePath = ""; // will hold the path of the HTML file we want to serve

  // Handle GET requests
  if (req.method === "GET") {
    // map URL "/" to index.html
    if (req.url === "/") {
      filePath = path.join(__dirname, "index.html");
    }
    // map URL "/about" to about.html
    else if (req.url === "/about") {
      filePath = path.join(__dirname, "about.html");
    }
    // map URL "/contact" to contact.html
    else if (req.url === "/contact") {
      filePath = path.join(__dirname, "contact.html");
    }
    // fallback for unknown URLs
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Page Not Found");
    }

    // read the HTML file and send it as response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data); // send HTML to browser
      }
    });
  }
});

// start server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
