const User = require("../models/User");
const UserData = require("../models/UserData");
const RangeSchema = require("../models/RangeSchema");

const agentRegisterDB = async (name, userName, contactNumber, email, hashedPassword) => {
  try {
    const newUser = new User({ name, userName, contactNumber, email, password: hashedPassword, userRole: 2, status: true });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

const listAgentsDB = async (filter, pageNumber) => {
  try {
    const perPage = 5;
    const skip = (pageNumber - 1) * perPage;

    let filterCondition = {};

    if (filter === "active") {
      filterCondition = { status: true };
    } else if (filter === "inactive") {
      filterCondition = { status: false };
    }

    const users =
      filter === "all"
        ? await User.find({ userRole: 2 }).limit(perPage).skip(skip)
        : await User.find({ ...filterCondition, userRole: 2 })
            .limit(perPage)
            .skip(skip);

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const agentProfileEditDB = async (id, updateUserinfo) => {
  try {
    const updatedAgent = await User.findByIdAndUpdate(id, updateUserinfo, { new: true });
    return updatedAgent;
  } catch (error) {
    console.error("Error editing agent profile:", error);
    throw error;
  }
};

const changeAgentStatusDB = async (id) => {
  try {
    const agent = await User.findOne({ _id: id });

    if (agent) {
      const updatedAgent = await User.findOneAndUpdate({ _id: id }, { $set: { status: !agent.status } }, { new: true });
      return updatedAgent;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error changing agent status:", error);
    throw error;
  }
};

const listEntityDB = async () => {
  try {
    const list = await UserData.find();
    if (!list) return null;
    return list;
  } catch (error) {
    throw error;
  }
};

const rangeSetupDB = async (startRange, endRange, color) => {
  try {
    const newRange = new RangeModel({
      startRange,
      endRange,
      color,
    });
    const savedRange = await newRange.save();
    return savedRange;
  } catch (error) {
    throw error;
  }
};

const rangeListDB = async () => {
  try {
    const ranges = await RangeModel.find();
    return ranges;
  } catch (error) {
    throw error;
  }
};

module.exports = { agentRegisterDB, listAgentsDB, agentProfileEditDB, changeAgentStatusDB, listEntityDB, rangeSetupDB, rangeListDB };
