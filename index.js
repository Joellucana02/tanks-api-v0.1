const express = require('express');
const app = express();
const importData = require('./tank-data.json');
let PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
    res.send("OK");
});
app.get("/finally", (req, res) => {
    res.send(importData);
});
app.listen(PORT, () => {
    console.log(`App is starting on port http://localhost:${PORT}`);
});