const AUTH_TOKEN = "process.env.AUTH_TOKEN;
fetch("http://localhost:5000/protected", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${AUTH_TOKEN}`
  }
})
  .then(res => res.json())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Request failed:", err));
