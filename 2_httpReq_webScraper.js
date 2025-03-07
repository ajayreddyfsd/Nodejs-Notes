const http = require("https");

const req = http.request("https://www.amazon.ca", (res) => {
  let data = ""; // Store the response data.

  // Listen for 'data' events and accumulate chunks.
  res.on("data", (chunk) => {
    data += chunk;
  });

  // Listen for the 'end' event to know when all data has been received.
  res.on("end", () => {
    console.log("Response fully received:", data);
  });

  // Optional: Handle errors
  res.on("error", (err) => {
    console.error("Error in response:", err);
  });
});

// Initiate the request.
req.end();


module.exports = {
  req,
  http,
}