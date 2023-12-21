const express = require('express')
const authrouter = express.Router()
const { login } = require("../controllers/authController")

authrouter.post('/register', login);

module.exports = authrouter;