const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDataSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tokenNumber: { type: Number, required: true },
  count: { type: Number, required: true },
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
