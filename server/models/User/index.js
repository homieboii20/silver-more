import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    home: { type: mongoose.Schema.Types.ObjectId, ref: "Home" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
