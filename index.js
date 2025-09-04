const Express = require('express');
const sendJSONPerson = require('./handler');
const path = require('path');

const app = Express();

app.use(Express.static("public"));
app.use(Express.json({limit: "1mb"}));

const PORT = 8000;

app.listen(PORT, () => {
    console.info("App listening on port " + PORT);
});

/* HTTP REQUEST IN EXPRESS */

// GET
app.get("/get", (req, res) => {
    res.send("Hello from GET\n");
});

// POST
app.post("/post", (req, res) => {
    res.send("Hello from POST\n");
});

// PUT
app.put("/put", (req, res) => {
    res.send("Hello from PUT\n");
});

// DELETE
app.delete("/delete", (req, res) => {
    res.send("Hello from DELETE\n");
});

// All
app.all("/all", (req, res) => {
    res.send("Hello from ALL\n");
});

// Render HTML
app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/asta", sendJSONPerson);

app['notify']('/notice', (req, res) => {
    res.send("Hello from NOTICE\n");
});