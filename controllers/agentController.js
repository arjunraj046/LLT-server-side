const { addagentDataDB, getAgentEntity } = require("../database/repository/agentRepository");

const addEntity = async (req, res) => {
  try {
    const { date, tokenNumber, count } = req.body;
    let id;
    let data = await addagentDataDB(id, date, tokenNumber, count);

    res.status(200).json({ status: "success", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listEntity = async (req, res) => {
  try {
    const data = req.body;
    const listEntity = await getAgentEntity();

    res.status(200).json({ status: "success", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addEntity, listEntity };
