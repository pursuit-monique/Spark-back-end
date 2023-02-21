const express = require("express");
const spark = express.Router();

const {
  getAllUsers,
  userTables,
  getOneUser,
  getUserTasks,
  getUserBlockers,
  updateUser,
  deleteUser,
  newUser,
} = require("../querys/spark");

const { stringValidator } = require("./functions/validation");

spark.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.get("/tables", async (req, res) => {
  try {
    const users = await userTables();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.get("/tasks/:id", async (req, res) => {
  try {
    let tasks = await getUserTasks(req.params.id);
    user = [...tasks];
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.get("/blockers/:id", async (req, res) => {
  try {
    let blockers = await getUserBlockers(req.params.id);
    user = [...blockers];
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.get("/:id", async (req, res) => {
  try {
    let user = await getOneUser(req.params.id);
    user = [...user];
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteaUser = await deleteUser(id);
    res.json(deleteaUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: `An error occured: ${error}` });
  }
});

spark.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await updateUser(id, req.body);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update." });
  }
});

spark.post("/", async (req, res) => {
  console.log("In POST");
  try {
    const user = await newUser(req.body);
    console.log("Console.log " + user);
    res.json(user);
  } catch (error) {
    console.log("BODY: ", req.body);
    res.status(400).json({ error: `Something went wrong: ${req.body}` });
  }
});

module.exports = spark;
