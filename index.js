const AUTH_TOKEN = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGVtb191c2VyIiwiaWF0IjoxNjk1MTk4NjAwfQ.dQw4w9WgXcQzRp8bGpRgZT3vz5qU1tPh4kF3o_Ufake;
fetch("http://localhost:5000/protected", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${AUTH_TOKEN}`
  }
})
  .then(res => res.json())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Request failed:", err));
