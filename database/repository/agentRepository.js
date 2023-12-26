const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Assuming you have defined the UserData model somewhere before using it in addagentDataDB function
// const UserData = mongoose.model('UserData');
const UserData = require("../models/UserData");


const addagentDataDB = async (id, date, tokenNumber, count) => {
  try {
    const userData = new UserData({
      userId: new ObjectId(id),
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


// const UserData = require("../models/UserData");
// // const { ObjectId } = require("mongoose").Types;

// const addagentDataDB = async (id, date, tokenNumber, count) => {
//   try {
//     const UserData = mongoose.model('UserData');

//     const userData = new UserData({
//       userId: ObjectId(id),
//       tokenNumber: tokenNumber,
//       count: count,
//       date: date,
//     });
    
//     const savedUserData = await userData.save();
//     return savedUserData;
//   } catch (error) {
//     throw error;
//   }
// };

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
