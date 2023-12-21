const express = require("express");
const agentRoute = express.Router();
const { agentAuthMiddleware } = require("../middleware/authMiddleware");
const { addData } = require("../controllers/agentController");

agentRoute.post("/add", agentAuthMiddleware, addData);

module.exports = agentRoute;
