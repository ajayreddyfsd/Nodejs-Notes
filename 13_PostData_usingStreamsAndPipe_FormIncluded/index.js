//$ how this differs from the code in folder no. 12
//$ the way we are reading the html file is different

//! 1. We have a simple form in index.html in the same folder
//!    - The form has method="POST" and action="/submit-data" filled
//! 2. When you submit the form, the browser sends a request to the server
//! 3. Server checks:
//!    - req.method === "POST"
//!    - req.url === "/submit-data"
//! 4. Server collects form data in chunks via the "data" event
//! 5. Once all data is received, "end" event fires
//! 6. Server parses the collected data using querystring.parse()
//! 7. Parsed data is now a JS object and is printed to console
//!    - Example: { name: 'Ajay', age: '25' }
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //$ GET PART
  //$ GET PART
  //$ GET PART
  //$ GET PART
  //another way to display html file using readableStream
  //but need to pipe both response and readable stream
  if (req.url === "/form") {
    // Instead of using readFile(), you could use createReadStream and pipe the data
    const readableStream = fs.createReadStream(
      "C:/Users/ajayr/OneDrive/Desktop/Nodejs-Notes/13_PostData_usingStreamsAndPipe_FormIncluded/index.html"
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    readableStream.pipe(res); // This pipes the file content directly to the response
  }

  //$ POST PART
  //$ POST PART
  //$ POST PART
  //$ POST PART
  //to collect the form data from streams, parse it and print it
  if (req.method === "POST" && req.url === "/submit-data") {
    let dataReceived = "";
    req.on("data", (chunk) => {
      dataReceived = dataReceived + chunk;
    });

    req.on("end", () => {
      const parsedData = querystring.parse(dataReceived);
      console.log(parsedData);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data received successfully!");
    });
  }
});

server.listen(2898, () => {
  console.log("Server is running on port 2898");
});
