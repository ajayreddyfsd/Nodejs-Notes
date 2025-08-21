//! we can use axios or fetch
// Fetch → good for SMBs (small/medium projects, hobby apps, school projects)
// Axios → good for Enterprises (large, production-level apps where you need reliability, error handling, interceptors, timeouts, etc.)

const axios = require("axios");

const axios = require("axios");

// Get data
async function getData() {
  try {
    const response = await axios.get("https://www.google.com");
    console.log(response.data); // `.data` contains the actual response content
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Post data
async function postData() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Hello Axios",
        body: "This is a test post",
        userId: 1,
      }
    );
    console.log(response.data); // Display only meaningful data
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
}

postData();

postData();
