//! JSON.stringify example
const user = {
  id: 2,
  name: "Ratna",
  age: 27,
  role: "Designer",
  location: "USA",
};

// Convert JS object to JSON string
const jsonString = JSON.stringify(user, null, 2); // null = no filter, 2 = pretty-print with 2 spaces

console.log("JSON string output:");
console.log(jsonString);
/* Output:
{
  "id": 2,
  "name": "Ratna",
  "age": 27,
  "role": "Designer",
  "location": "USA"
}
*/
