const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // middleware

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// ==== REQUEST PROPERTIES IN EXPRESS =====

// params
app.get("/users/:id", (req, res) => {
  res.send("user id: " + req.params.id); // misal : /users/123
});

// query
app.get("/search", (req, res) => {
  res.send("Search query: " + req.query.siswa); // misal /search?siswa=abdul → "abdul"
});

// headers
app.get("/headers", (req, res) => {
  res.send(req.headers); // menampilkan semua header
});

// body
app.post("/login", (req, res) => {
    console.log(req.body);      
    res.send(req.body.username); 
});// misal body: { "username": "abdul" }

// method
app.get("/method", (req, res) => {
    res.send("Method: " + req.method); // Method: GET
});

// path
app.get("/user/siswa", (req, res) => {
    res.send("Path: " + req.path); // Path: /user/siswa
});



// ==== REQUEST METHODS IN EXPRESS =====
 
app.get("/reqmethod", (req, res) => {
  // req.get() untuk mendapatkan header tertentu
  const agent = req.get("User-Agent");

  // req.is() untuk mengecek tipe konten request body
  const isJson = req.is("json");

  // req.accepts() untuk mengecek tipe konten yang diterima
  const acceptsHtml = req.accepts("html");

  res.send({
    "User-Agent": agent,
    "Is JSON?": isJson ? "Yes" : "No",
    "Accepts HTML?": acceptsHtml ? "Yes" : "No"
  });
});

// POST untuk tes JSON body
// app.post("/json-test", (req, res) => {
//   const isJson = req.is("json");

//   res.send({
//     "Is JSON?": isJson ? "Yes" : "No",
//     "Request Body": req.body
//   });
// });

