const User = require("../models/User");

const clientLoginDB = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return null;
    return user;
  } catch (error) {
    console.error("Error during Authentication:", error);
    throw error;
  }
};
const getAgent = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) return null;
    return user;
  } catch (error) {
    console.error("Error during Authentication:", error);
    throw error;
  }
};

module.exports = { clientLoginDB, getAgent };
