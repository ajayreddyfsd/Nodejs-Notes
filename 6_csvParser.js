//! The below code is reading a CSV file line by line like a readStream,
//! converting each row into a JavaScript object,
//! and is printing each row to the console.

const fs = require("fs");
// fs = file system module in Node
// lets us read or write files

const { parse } = require("csv-parse");
// csv-parse = library to convert CSV into JS objects

// open the CSV file as a readable stream
fs.createReadStream("data.csv")
  // pipe the file into the CSV parser
  .pipe(parse({ columns: true, trim: true }))
  // columns: true -> first row is used as keys (headers)
  // trim: true -> remove extra spaces from values

  // every time a row is read, this runs
  .on("data", (row) => {
    console.log("Row:", row);
    // row is now a JS object, like { name: "Ajay", age: "25" }
  })

  // when the whole file is read, this runs
  .on("end", () => {
    console.log("CSV file successfully processed!");
  })

  // if there is an error while reading the file
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });
