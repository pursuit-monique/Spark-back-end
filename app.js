const cors = require("cors");
const express = require("express");
const app = express();
const sparkController = require("./controllers/sparkController");

app.use(cors());
app.use(express.json());
app.use("/spark", sparkController);

app.get("/", (req, res) => {
  res.send("welcome to spark!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

module.exports = app;
