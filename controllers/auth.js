const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { firstName, lastName, contact, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      contact,
      email,
      password: hashedPassword,
      userRole: 2,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    // Extract data from request body
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });
    console.log(user);

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a token
    // console.log(process.env.JWT_SECRET);
    const token = jwt.sign({ userId: user._id }, "123", {
      expiresIn: "1h",
    });
    let userRole = user.userRole;
    console.log(token);

    res.status(200).json({ token, userRole });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
