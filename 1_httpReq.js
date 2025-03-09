const http = require("http");

const req = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log("chunk = ", chunk);
  });
  res.on("end", () => {
    console.log("done!!!!!!!!!!!");
  });
});

//to initiate the request
req.end();

//flow of execution
//3 callbacks
//one to make a request and once u get response, the callback is placed onto CBQ and then onto CS
//then again 2 callbacks for data and end events
//whenever a chunk is received, its callback is placed onto CBQ and then onto CS, happens so many times
//when end of data is detected, places its callback onto CBQ and then onto CS
