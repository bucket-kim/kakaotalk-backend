// app config
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// middleware

// db config

// api routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
