//we need this http module to write a server
const http = require('http')


//this is a simple server code, which takes a callback with two args, res and req
const server = http.createServer((req, res) => {

  //writing simple header for the response
  res.writeHead(200, { "content-type": "text/plain" })
  
  //writing a simple response to show to the user
  res.end('Welcome to Nodejs!!!!!!!!')

})


//now that server is done! we need to activate it and make sure it is active all the time, 
// so we start the listen method on any specific port
server.listen(2898, () => {

  //this is a simple message to be printed to console when server is activated so user knows the link to find the response
  console.log('check local host 2898')
})