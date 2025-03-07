const axios = require("axios");

//to get data
async function getData() {
  await axios
    .get("https://www.google.com")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

//to post data
async function postData() {
  await axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "Hello Axios",
      body: "This is a test post",
      userId: 1,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

postData()