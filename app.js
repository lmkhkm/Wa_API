const express = require("express");
const app = express(); 

app.use(express.json());

app.get("/", (req, res) => {
   res.send("Hello, World!");
});

app.post("/getMessage", (req, res) => {
    const msgReturn = {
        msg: req.body.msg,
        room: req.body.room,
        sender: req.body.sender
    };
    res.send(msgReturn);
});

app.listen(80, () => {
   console.log("Server Started. Listening on 80");
});

module.exports = app;