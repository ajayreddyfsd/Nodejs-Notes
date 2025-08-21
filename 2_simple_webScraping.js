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
};

//$ same as prev, but we are accumulating data chunks and also we are exporting, so can be used outside as well
//! 🧭 Final Map (step-by-step arrows)

// http.request(...) → CS → WebAPI (setup req + register (res)) → CS empty
// Response headers → WebAPI → CBQ → CS executes (res) callback
// Inside (res) → registers "data", "end", "error" → WebAPI → CS empty
// Each chunk → WebAPI → CBQ → CS executes "data" callback (appends string)
// Stream end → WebAPI → CBQ → CS executes "end" callback (logs final data)
// If error → WebAPI → CBQ → CS executes "error" callback
