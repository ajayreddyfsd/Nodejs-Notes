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
