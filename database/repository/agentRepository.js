const UserData = require("../models/UserData");

const addagentDataDB = async (id, date, tokenNumber, count) => {
  try {
    const userData = new UserData({
      userId: id,
      tokenNumber: tokenNumber,
      count: count,
      date: date,
    });
    const savedUserData = await userData.save();
    return savedUserData;
  } catch (error) {
    throw error;
  }
};

const getAgentEntity = async (id) => {
  try {
    const user = await UserData.find({ _id: id });
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { addagentDataDB, getAgentEntity };
