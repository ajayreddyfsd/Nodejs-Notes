const http = require('https');

const req = http.request("https://www.amazon.ca/", (res) => {
  res.on("data", (chunk) => {
    console.log("chunk = ", chunk.toString());
  });
  res.on("end", () => {
    console.log("done!!!!!!!!!!!");
  });
});

req.end()
