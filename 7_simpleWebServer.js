//we need this http module to write a server
const http = require("http");

//this is a simple server code, which takes a callback with two args, res and req
const server = http.createServer((req, res) => {
  //writing simple header for the response
  res.writeHead(200, { "content-type": "text/plain" });

  //writing a simple response to show to the user
  res.end("Welcome to Nodejs!!!!!!!!");
});

//now that server is done! we need to activate it and make sure it is active all the time,
// so we start the listen method on any specific port
server.listen(2898, () => {
  //this is a simple message to be printed to console when server is activated so user knows the link to find the response
  console.log("check local host 2898");
});

//! flow of execution
//! 🧭 Step-by-step “one-shot map” explanation
// 1. const http = require("http")
//    → CS loads the built-in HTTP module
//    → gives access to createServer and other HTTP functions
//    → CS empties

// 2. http.createServer(callback)
//    → CqllStack runs createServer
//    → creates server object that will run callback(req, res) when request comes
//    → no request yet → CS empties

// 3. server.listen(2898, callback)
//    → CS runs listen
//    → WebAPI (Node) registers listener waiting for incoming HTTP requests
//    → listen callback will run once server is ready (goes to CBQ → CS)
//    → CS empties

// 4. Browser sends request to localhost:2898
//    → WebAPI detects request
//    → moves server callback (req, res) to CBQ
//    → Event loop pushes it to CS → executes server callback

// 5. Inside server callback
//    → CS executes res.writeHead(200, { "content-type": "text/plain" })
//    → CS executes res.end("Welcome to Nodejs!!!!!!!!") → sends response to browser
//    → CS empties

// 6. Server listen callback
//    → CBQ → CS executes → console.log("check local host 2898")
//    → confirms server is active
