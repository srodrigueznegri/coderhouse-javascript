const express = require('express');
const server = express();
const port = 4000;

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.get("/*", (req, res) => {
    const file = req.path;
    res.sendFile(__dirname + '/' + file);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});