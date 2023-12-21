
const {addagentDataDB} = require("../database/repository/agentRepository")

const addData = async (req, res) => {
  try {
    const data = req.body;
    await addagentDataDB()

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




  const deletedata = async (req, res) => { 
    try {
      const data = req.body;
      await addagentDataDB()
  
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { addData };
