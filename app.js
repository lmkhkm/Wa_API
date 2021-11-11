const app = require("express")();

app.get("/", (req, res) => {
   return res.send("Hello, World!");
});

app.listen(80, () => {
   console.log("Server Started");
});