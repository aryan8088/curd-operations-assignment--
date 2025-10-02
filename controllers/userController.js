const User = require("../models/userModel");

//Helper function to get all users from the database -- admin functionality
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users, null, 2)); // pretty-print JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Helper function to get a specific user by id 
const getUserById = async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    if (user.length === 0) return res.status(404).json({ message: "User not found" });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user[0], null, 2));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Helper function to create a specific user -- user functionlaity 
const createUser = async (req, res) => {
  const { name, email } = req.body; //getting data from user
  if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

  try {
    await User.create({ name, email });
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Helper function to update a specific user by id -- 
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

  try {
    await User.update(req.params.id, { name, email });
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Helper function to Delete a specific user by id -- 
const deleteUser = async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
