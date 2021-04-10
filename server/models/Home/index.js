import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

export default Home;
