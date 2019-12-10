const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("User", userSchema);
