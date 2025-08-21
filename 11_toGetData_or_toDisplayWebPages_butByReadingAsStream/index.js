const http = require("http"); // needed to create the server
const fs = require("fs"); // needed to read HTML files
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
    else {
      filePath = path.join(__dirname, "contact.html");
    }

    // create a readable stream for the file
    const readableStream = fs.createReadStream(filePath);

    // handle errors in reading
    readableStream.on("error", (err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading page");
    });

    // set response header and pipe the stream directly to the response
    res.writeHead(200, { "Content-Type": "text/html" });
    readableStream.pipe(res); // this sends chunks to browser as they are read
  }
  // fallback for other request methods (not GET)
  else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

// start server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
