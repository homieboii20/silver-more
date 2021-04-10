import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    name: String,
    limit_amount: Number,
    spending_amount: Number,
    remaining_amount: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;
