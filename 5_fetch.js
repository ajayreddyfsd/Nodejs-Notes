async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    console.log(data); // Simple output
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}

async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Test", body: "Hello World" }) // Simple JSON
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    console.log(data); // Simple output
  } catch (error) {
    console.error("Failed to post data:", error.message);
  }
}

postData();
