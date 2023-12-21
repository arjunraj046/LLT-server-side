const { agentRegisterDB, listAgentsDB, agentProfileEditDB, changeAgentStatusDB, listEntityDB } = require("../database/repository/adminRepository");
const { passwordHashing } = require("../services/hasinging");
const { getAgent } = require("../database/repository/authRepository");

const agentRegister = async (req, res) => {
  try {
    const { name, userName, contactNumber, email, password } = req.body;
    const hashedPassword = passwordHashing(password);
    const newUser = await agentRegisterDB(name, userName, contactNumber, email, hashedPassword);
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const agentList = async (req, res) => {
  try {
    const { filter = "all", pageNumber = 1 } = req.params;
    const agentList = await listAgentsDB(filter, pageNumber);
    res.send(agentList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const agentDetails = async (req, res) => {
  try {
    const id = req.params;
    const agentDetails = await getAgent(id);
    res.status(200).json({ status: "success", agentDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editAgent = async (req, res) => {
  try {
    const id = req.params;
    const updateUserinfo = req.body;

    const updateUser = await agentProfileEditDB(id, updateUserinfo);
    res.status(200).json({ status: "success", message: "Agent updated successfully", updateUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const agentStatusChange = async (req, res) => {
  try {
    const id = req.params;

    const agent = await changeAgentStatusDB(id);
    res.status(200).json({ status: "success", agent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listEntity = async (req, res) => {
  try {
    const list = await listEntityDB();
    res.status(200).json({ status: "success", list });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const listEntity = async (req, res) => {
//   try {
//     const list = await listEntityDB();
//     res.status(200).json({ status: "success", list });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = { agentRegister, agentList, agentDetails, editAgent, agentStatusChange, listEntity };
