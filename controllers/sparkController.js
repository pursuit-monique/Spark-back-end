const express = require("express");
const spark = express.Router();

spark.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = spark;
