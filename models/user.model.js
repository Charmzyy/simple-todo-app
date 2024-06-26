const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname:{
        type:String,
        required:[true,'Required First Name']
    },
    lname: {
      type: String,
      required: [true, "Required Last Name"],
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Required"],
      unique: true,
    },
    roles: {
      type: [String],
      enum: ['admin', 'user', 'manager'], // Example roles
      default: ['user'] // Default role for new users
    }
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
