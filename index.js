const AUTH_TOKEN = "teshfhfjhgjkhgkg6869685hhgjhu7678";
fetch("http://localhost:5000/protected", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${AUTH_TOKEN}`
  }
})
  .then(res => res.json())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Request failed:", err));
