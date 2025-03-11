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
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Hello Axios",
      body: "This is a test post",
      userId: 1,
    });
    console.log(response.data); // Display only meaningful data
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
}

postData();


postData()
