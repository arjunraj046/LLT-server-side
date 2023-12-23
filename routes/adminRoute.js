const express = require("express");
const adminRoute = express.Router();
const { agentRegister, agentList,agentDetails, editAgent, agentStatusChange } = require("../controllers/adminController");
const { adminAuthMiddleware } = require("../middleware/authMiddleware");

adminRoute.get("/agent-list/:filter?/:pagenumber?", adminAuthMiddleware, agentList);
adminRoute.post("/agent-register", adminAuthMiddleware, agentRegister);
adminRoute.get("/agent/:id", adminAuthMiddleware, agentDetails);
adminRoute.put("/edit-agent/:id", adminAuthMiddleware, editAgent);
adminRoute.get("/agent-status-chnage/:id", adminAuthMiddleware, agentStatusChange);

adminRoute.post("/enitity-rang",adminAuthMiddleware,);
adminRoute.get("/enitity-rang-list",adminAuthMiddleware,);

module.exports = adminRoute;
