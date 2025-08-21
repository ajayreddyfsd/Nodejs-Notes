//! JSON.parse example
const jsonString = `{
  "id": 2,
  "name": "Ratna",
  "age": 27,
  "role": "Designer",
  "location": "USA"
}`;

// Convert JSON string back to JS object
const userObj = JSON.parse(jsonString);

console.log("JS object output:");
console.log(userObj);
/* Output:
{
  id: 2,
  name: 'Ratna',
  age: 27,
  role: 'Designer',
  location: 'USA'
}
*/
