const http = require("http"); //we need this create server
const fs = require("fs"); // we need this to read html file

//simple server that takes a callback with two args - req and res
const server = http.createServer((req, res) => {
  //read the html file
  //if error, logs error and displays error on webpage
  //if no error, displays the webpage
  fs.readFile(
    "C:\\Users\\ajayr\\OneDrive\\Desktop\\nodejs\\8_WebServer\\index.html",
    (err, data) => {
      if (err) {
        console.error("Error reading file:", err); // This will log the error
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Cant fulfill the request");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    }
  );
});

//activate the server and making sure its active througout the session
server.listen(3000, () => {
  console.log("listen on 3000");
});


//note:
//simpler way to read html files and display
//in 13th folder
// // Instead of using readFile(), you could use createReadStream and pipe the data
// const readableStream = fs.createReadStream(
//   "C:\\Users\\ajayr\\OneDrive\\Desktop\\nodejs\\12_PostData_Form_Included\\index.html"
// );
// res.writeHead(200, { "Content-Type": "text/html" });
// readableStream.pipe(res); // This pipes the file content directly to the response
