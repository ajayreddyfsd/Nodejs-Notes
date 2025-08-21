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
const fs = require("fs"); // we need this to read the HTML file

// We need this to extract form data
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //$ GET PART
  //$ GET PART
  //$ GET PART
  //$ GET PART
  // This code is to display the form in the HTML file to the user
  // if accessing the route /form
  if (req.url === "/form") {
    fs.readFile(
      "C:/Users/ajayr/OneDrive/Desktop/Nodejs-Notes/12_PostData_Form_Included/index.html",
      (err, data) => {
        if (err) {
          console.error("Error reading file:", err); // This will log the error
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("Can't fulfill the request");
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.end(data);
        }
      }
    );
  }

  //$ POST PART
  //$ POST PART
  //$ POST PART
  //$ POST PART
  // Handle POST request to /submit-data
  if (req.method === "POST" && req.url === "/submit-data") {
    let dataReceived = "";
    // Need to listen to data - streams and collect the data
    req.on("data", (chunk) => {
      dataReceived = dataReceived + chunk;
    });

    // Finally we need to listen to the end event listener also
    req.on("end", () => {
      // Parse the received data
      const parsedData = querystring.parse(dataReceived);

      console.log(parsedData);

      // Respond back to the client
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Data received successfully!");
    });
  }
});

server.listen(2898, () => {
  console.log("Server is running on port 2898");
});
