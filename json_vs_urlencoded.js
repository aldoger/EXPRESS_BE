const express = require("express");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post("/products/:id", (req, res) => {
  console.log(req.body);
  console.log(req.headers["content-type"]);
  res.send("yes");
});
