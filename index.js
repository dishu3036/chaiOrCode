require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Queen Diksha Jamwal 👑 ");
});

app.get("/yes", (req, res) => {
  res.send(`<h1>Hello King Manish Jamwal 🤴</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
