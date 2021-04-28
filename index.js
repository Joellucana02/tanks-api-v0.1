const express = require('express');
const app = express();
const importData = require('./tank-data.json');
let PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Origin: *");
    res.send("OK");
    res.set("Content-Type", "text/html");
    res.append("Access-Control-Allow-Origin", "*");
});
app.get("/finally", (req, res) => {
    res.header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Origin: *");
    res.send(importData);
    res.set("Content-Type", "text/html");
    res.append("Access-Control-Allow-Origin", "*");
});
app.listen(PORT, () => {
    console.log(`App is starting on port http://localhost:${PORT}`);
});