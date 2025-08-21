// Bring (import) req and http from the other file.
// That other file exported them using module.exports.
const { req, http } = require("./2_httpReq_webScraper");

// Print the request object.
// This is the same request we created with http.request().
console.log(req);

// Print the https module itself.
// This is the Node built-in https library we exported.
console.log(http);
