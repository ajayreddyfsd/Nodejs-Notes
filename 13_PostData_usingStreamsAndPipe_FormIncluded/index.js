const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //another way to display html file using readableStream
  //but need to pipe both response and readable stream
  if (req.url === "/form") {
    // Instead of using readFile(), you could use createReadStream and pipe the data
    const readableStream = fs.createReadStream(
      "C:\\Users\\ajayr\\OneDrive\\Desktop\\nodejs\\12_PostData_Form_Included\\index.html"
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    readableStream.pipe(res); // This pipes the file content directly to the response
  }

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
