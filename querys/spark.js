const db = require("../db/dbConfig.js");

const getAllUsers = async () => await db.any("SELECT * FROM users");

const userTables = async () =>
  await db.any("SELECT id, name, profile FROM users");

// const getAllUsers = async () =>
//   await db.any(
//     "SELECT users.id, name, about, profile, mood, theme, blocker_main, blockerlist, task.task, task.is_complete FROM users JOIN tasks ON users.id= tasks.user_id"
//   );

const getOneUser = async (id) =>
  await db.any("SELECT * FROM users WHERE id=$1", id);

const getUserBlockers = async (id) =>
  await db.any("SELECT * FROM blockers WHERE id=$1", id);

const getUserTasks = async (id) =>
  await db.any(
    "SELECT goals.name, tasks.task, tasks.is_complete FROM users JOIN tasks ON users.id=tasks.user_id JOIN goals ON tasks.goal_id=goals.id WHERE users.id=$1",
    id
  );

const updateUser = async (id, user) => {
  const { name, about, profile, mood, theme, blocker_main, blockerlist } = user;

  return await db.one(
    "UPDATE users SET name=$1, about=$2, profile=$3, mood=$4, theme=$5, blocker_Main=$6, blockerlist=$7 WHERE id=$8 RETURNING *",
    [name, about, profile, mood, theme, blocker_main, blockerlist, id]
  );
};

const deleteUser = async (id) =>
  await db.one("DELETE FROM users WHERE id = $1 RETURNING *", id);

const newUser = async (user) =>
  await db.one(
    "INSERT INTO users (name, gender, about, profile, mood, theme, has_tasks, has_blockers) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [
      user.name,
      user.gender,
      user.about,
      user.profile,
      user.mood,
      user.theme,
      user.has_tasks,
      user.has_blockers,
    ]
  );

module.exports = {
  getAllUsers,
  userTables,
  getOneUser,
  getUserTasks,
  getUserBlockers,
  deleteUser,
  updateUser,
  newUser,
};
