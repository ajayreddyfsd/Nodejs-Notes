const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("data.csv")
  .pipe(parse({ columns: true, trim: true })) // Parse CSV with column headers
  .on("data", (row) => {
    console.log("Row:", row); // Output each row as a JSON object
  })
  .on("end", () => {
    console.log("CSV file successfully processed!");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });
