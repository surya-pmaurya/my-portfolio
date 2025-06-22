require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("enter your credential");
});
app.listen(process.env.PORT, () => {
  console.log(`App started at port: ${port}`);
});
