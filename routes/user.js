const UserData = require("../models/UserData");
const User = require("../models/User");

const express = require("express");
const router = express.Router();

// Handle user data request
router.post("/data", async (req, res) => {
  console.log("hai data");
  try {
    const { count, tokenLastDigit } = req.body;

    // Create a new UserData instance
    const newUserData = new UserData({
      tokenNumber: tokenLastDigit,
      count: count,
    });

    // Save the user data to the UserData table
    const savedUserData = await newUserData.save();

    console.log("User data saved:", savedUserData);
    res.json({ message: "User data received successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/view", async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
