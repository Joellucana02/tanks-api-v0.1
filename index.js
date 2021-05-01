const express = require('express');
const cors = require('cors');
const app = express();
const importData = require('./tank-data.json');
let PORT = process.env.PORT || 5500;
//This line of code down below took me almost a week...
app.use(cors());

app.get("/", (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send("OK");
});
app.get("/finally", (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(importData);
});
app.listen(PORT, () => {
    console.log(`App is starting on port http://localhost:${PORT}`);
});