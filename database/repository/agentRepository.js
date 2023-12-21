const User = require("../models/User");
const UserData = require("../models/UserData");

const addagentDataDB = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
};

const getAgentEntity = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
};


module.exports = { addagentDataDB, getAgentEntity };
