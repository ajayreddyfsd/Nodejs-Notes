const http = require("http");

//an array of Objects
const users = [
  { id: 1, name: "Ajay", age: 25, role: "Developer", location: "India" },
  { id: 2, name: "Ratna", age: 27, role: "Designer", location: "USA" },
  { id: 3, name: "Sam", age: 30, role: "Manager", location: "Canada" },
  { id: 4, name: "Mira", age: 22, role: "Data Analyst", location: "UK" },
  {
    id: 5,
    name: "Leo",
    age: 28,
    role: "Software Engineer",
    location: "Germany",
  },
  {
    id: 6,
    name: "Sophia",
    age: 26,
    role: "Product Manager",
    location: "France",
  },
  {
    id: 7,
    name: "Arjun",
    age: 32,
    role: "DevOps Engineer",
    location: "Australia",
  },
  {
    id: 8,
    name: "Zara",
    age: 24,
    role: "Marketing Specialist",
    location: "Singapore",
  },
  {
    id: 9,
    name: "Kai",
    age: 29,
    role: "Cybersecurity Analyst",
    location: "Japan",
  },
  { id: 10, name: "Emma", age: 31, role: "AI Researcher", location: "Sweden" },
];

const server = http.createServer((req, res) => {
  // Setting response headers
  res.writeHead(200, { "Content-Type": "application/json" });

  //splitting the url to get the parameter from the parameterized URL
  const parameter = Number(req.url.split("/")[2]);

  // If valid parameter exists in array, return user; else return error
  //checking for valid parameter
  if (!isNaN(parameter) && parameter >= 0 && parameter <= users.length - 1) {
    res.write(JSON.stringify(users[parameter], null, 2));
  } else {
    res.write(JSON.stringify({ error: "User not found" }, null, 2));
  }

  res.end("done!");
});

server.listen(2898, () => {
  console.log("check local host 2898");
});
