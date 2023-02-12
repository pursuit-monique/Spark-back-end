const express = require("express");
const spark = express.Router();

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  newUser,
} = require("../querys/spark");

spark.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const user = await getOneUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.put("/", async (req, res) => {
  try {
    const user = await newUser(req.body);
    res.json(user);
  } catch (error) {
    console.log(req.body);
    res.status(400).json({ error: `Something went wrong: ${req.body}` });
  }
});

module.exports = spark;
