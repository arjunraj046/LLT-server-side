const express = require("express");
const adminRoute = express.Router();
const { agentRegister, agentList, editAgent, agentStatusChange } = require("../controllers/adminController");
const { adminAuthMiddleware } = require("../middleware/authMiddleware");

adminRoute.get("/agent-list/:filter?/:pagenumber?", adminAuthMiddleware, agentList);
adminRoute.post("/agent-register", adminAuthMiddleware, agentRegister);
adminRoute.get("/agent/:id", adminAuthMiddleware, editAgent);
adminRoute.put("/edit-agent/:id", adminAuthMiddleware, editAgent);
adminRoute.get("/agent-status/:id", adminAuthMiddleware, agentStatusChange);
// adminRoute.post("/enitity-rang");

module.exports = adminRoute;
