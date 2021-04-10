import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    balance: { type: Number, default: 0 },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    transactions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
    ],
    budgets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Budget" }],
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
