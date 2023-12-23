const express = require("express");
const agentRoute = express.Router();
const { agentAuthMiddleware } = require("../middleware/authMiddleware");
const { addEntity, listEntity } = require("../controllers/agentController");

agentRoute.get("/entity", agentAuthMiddleware, listEntity);
agentRoute.post("/add-entity", agentAuthMiddleware, addEntity);

module.exports = agentRoute;
