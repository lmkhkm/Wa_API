const express = require("express");
const app = express(); 

app.get("/", (req, res) => {
   res.send("Hello, World!");
});

app.post("/getMessage", (req, res) => {
  res.send(req.body.msg);
});

app.listen(80, () => {
   console.log("Server Started");
});

module.exports = app;