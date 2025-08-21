//? What’s happening step by step
//? What’s happening step by step
//? What’s happening step by step

//! 1. We have a simple form in index.html in the same folder
//!    - The form has method="POST" and action="/submit-data"
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

//we need this to extract form data
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //below code
  //to handle form, collect its data and parse and to do something with it
  if (req.method === "POST" && req.url === "/submit-data") {
    let dataReceived = "";
    //need to listen to data - streams and collect the data
    req.on("data", (chunk) => {
      dataReceived = dataReceived + chunk;
    });

    //finally we need to listen to end event listener also
    req.on("end", () => {
      //we need to parse the received data
      const parsedData = querystring.parse(dataReceived);

      console.log(parsedData);
    });
  }
});

server.listen(2898, () => {
  console.log("check on port 2898");
});
